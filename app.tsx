import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./src/components/atoms/Header";
import Body from "./src/components/atoms/Body";
import ErrorBoundary from "./src/components/atoms/Error";
import "./app.scss";

const About = lazy(() => import("./src/components/screen/About"));
const RestaurantItem = lazy(() =>
  import("./src/components/screen/RestaurantItem")
);
const Contact_us = lazy(() => import("./src/components/screen/ContactUs"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);

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
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact_us />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <RestaurantItem />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

root.render(<RouterProvider router={router} />);
