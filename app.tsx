import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./src/components/atoms/Header/index";
import ErrorBoundary from "./src/components/atoms/Error/index";
import store from "./store/index";
import { Provider, useSelector } from "react-redux";
import "./app.scss";
import Toast from "./src/components/atoms/Toast";

const Body = lazy(() => import("./src/components/screen/Home/index"));
const Cart = lazy(() => import("./src/components/screen/Cart/index"));
const About = lazy(() => import("./src/components/screen/About/index"));
const RestaurantItem = lazy(
  () => import("./src/components/screen/Restaurant/index")
);
const ContactUs = lazy(() => import("./src/components/screen/ContactUs/index"));
const AppLayout = () => {
  const toast = useSelector((state: any) => state.toast);
  return (
    <div className="app">
      <Header />
      <Toast toastProps={toast.toastProps} />
      <Outlet />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    ),
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
