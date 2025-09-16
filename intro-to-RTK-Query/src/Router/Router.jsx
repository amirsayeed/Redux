import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App"
import Feed from "../pages/Feed";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Feed/>
      }
    ]
  },
]);