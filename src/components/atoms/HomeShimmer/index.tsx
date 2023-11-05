import React from "react";

const HomeShimmer = () => {
  return (
    <div
      className="shimmer_container"
      style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}
    >
      <div style={{ minWidth: "1066px" }}>
        <div className="shimmer" style={{ height: "27.5px" }}></div>
        <div
          className="shimmer"
          style={{ height: "256px", marginTop: "32px", marginBottom: "48px" }}
        ></div>
        <div className="shimmer" style={{ height: "27.5px" }}></div>
        <div
          className="shimmer"
          style={{ height: "180px", marginTop: "16px", marginBottom: "16px" }}
        ></div>
      </div>
    </div>
  );
};

export default HomeShimmer;
