import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./src/components/atoms/Header/index";
import ErrorBoundary from "./src/components/atoms/Error/index";
import "./app.scss";

const Body = lazy(() => import("./src/components/screen/Home/index"));
const Cart = lazy(() => import("./src/components/screen/Cart/index"));
const About = lazy(() => import("./src/components/screen/About/index"));
const RestaurantItem = lazy(
  () => import("./src/components/screen/Restaurant/index")
);
const ContactUs = lazy(() => import("./src/components/screen/ContactUs/index"));

const AppLayout = () => {
  return (
    <div className="app">
      {/* <Header /> */}
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Body />
          </Suspense>
        ),
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
            <ContactUs />
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
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

root.render(<RouterProvider router={router} />);
