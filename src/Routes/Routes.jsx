import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import StartPage from "../Pages/StartPage/StartPage";
import NewChartPage from "../Pages/NewChartPage/NewChartPage";
import SettingsPage from "../Pages/SettingsPage/SettingsPage";

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
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default Routes;
