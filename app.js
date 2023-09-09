import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/atoms/Header";
import Body from "./src/components/atoms/Body";
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

root.render(<AppLayout />);
