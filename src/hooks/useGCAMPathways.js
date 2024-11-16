import { useState, useEffect } from "react";
import Papa from "papaparse";

export const useGCAMPathways = () => {
  const [pathwaysData, setPathwaysData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/cleaned/agri/agri_emission_pathways_GCAM.csv"
        );
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const parsedData = results.data
              .filter((row) => row.Value) // Filter out any incomplete rows
              .map((row) => ({
                country_region: row.country_region,
                year: parseInt(row.Year),
                scenario: row.Scenario,
                value: parseFloat(row.Value),
                category: row.Category,
                subcategory: row.Subcategory,
                indicator: row.Indicator,
              }));
            setPathwaysData(parsedData);
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

  return { pathwaysData, isLoading, error };
};
