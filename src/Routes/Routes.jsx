import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import StartPage from "../Pages/StartPage/StartPage";
import NewChartPage from "../Pages/NewChartPage/NewChartPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <StartPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/new-size-chart",
        element: <NewChartPage />,
      },
    ],
  },
]);

export default Routes;
