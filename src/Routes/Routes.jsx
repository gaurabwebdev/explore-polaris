import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import StartPage from "../Pages/StartPage/StartPage";
import NewChartPage from "../Pages/NewChartPage/NewChartPage";
import SettingsPage from "../Pages/SettingsPage/SettingsPage";
import PlanPage from "../Pages/PlanPage/PlanPage";
import HelpPage from "../Pages/HelpPage/HelpPage";
import RatingPage from "../Pages/RatingPage/RatingPage";

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
      {
        path: "/plans",
        element: <PlanPage />,
      },
      {
        path: "/help",
        element: <HelpPage />,
      },
      {
        path: "/rating",
        element: <RatingPage />,
      },
    ],
  },
]);

export default Routes;
