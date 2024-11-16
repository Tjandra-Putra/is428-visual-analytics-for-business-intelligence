import { useState, useEffect } from "react";
import Papa from "papaparse";

export const useAgricultureData = () => {
  const [emissionsData, setEmissionsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/cleaned/agri/agri_emissions.csv");

        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const parsedData = results.data
              .filter((row) => row.ISO && row.Value)
              .map((row) => ({
                ISO: row["ISO"],
                Country: row.Country,
                Gas: row.Gas,
                Date: new Date(row.Timestamp),
                Value: parseFloat(row.Value),
              }));
            setEmissionsData(parsedData);
            setIsLoading(false);
          },
          error: (error) => {
            console.error("Parse error:", error);
            setError(error.message);
            setIsLoading(false);
          },
        });
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { emissionsData, isLoading, error };
};
