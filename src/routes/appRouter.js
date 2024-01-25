import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import Browse from "../components/Browse";
import Login from "../components/Login";

const appRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/browser", element: <Browse /> },
]);

export default appRouter;
