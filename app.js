import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./src/components/atoms/Header";
import Body from "./src/components/atoms/Body";
import Error from "./src/components/atoms/Error";
import "./app.scss";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <Header />,
  },
]);

root.render(<RouterProvider router={router} />);
