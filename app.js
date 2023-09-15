import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./src/components/atoms/Header";
import Body from "./src/components/atoms/Body";
import Error from "./src/components/atoms/Error";
import About from "./src/components/screen/About";
import "./app.scss";
import ContactUs from "./src/components/screen/ContactUs";
import RestaurantItem from "./src/components/screen/RestaurantItem";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      { path: "/restaurant/:resId", element: <RestaurantItem /> },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
