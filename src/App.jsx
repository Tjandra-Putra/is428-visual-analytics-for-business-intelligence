import React from "react";
import "./App.css";
import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home, Layout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        async lazy() {
          // Multiple routes in lazy file
          let { Dashboard } = await import("./pages/Dashboard");
          return { Component: Dashboard };
        },
      },
      // {
      //   path: "*",
      //   element: <NoMatch />,
      // },
    ],
  },
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} fallbackElement={<p>Loading ...</p>} />
    </React.Fragment>
  );
}

export default App;
