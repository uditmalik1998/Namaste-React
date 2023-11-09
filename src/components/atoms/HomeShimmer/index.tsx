import React from "react";
import useDeviceType from "../../../utils/hooks/useDeviceType";

const HomeShimmer = () => {
  const { deviceType } = useDeviceType();

  return (
    <div
      className="shimmer_container"
      style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}
    >
      <div style={{ minWidth: "1066px" }}>
        <div className="shimmer" style={{ height: "27.5px" }}></div>
        <div
          className="shimmer"
          style={
            deviceType === "desktop"
              ? { height: "256px", marginTop: "32px", marginBottom: "48px" }
              : { height: "175px", marginTop: "32px", marginBottom: "20px" }
          }
        ></div>
        <div
          className="shimmer"
          style={
            deviceType === "desktop"
              ? { height: "27.5px" }
              : { height: "220px" }
          }
        ></div>
        {deviceType === "desktop" ? (
          <div
            className="shimmer"
            style={{ height: "180px", marginTop: "16px", marginBottom: "16px" }}
          ></div>
        ) : null}
        {deviceType !== "desktop"
          ? [1, 2].map((item: number) => (
              <div
                key={item}
                className="shimmer"
                style={{ height: "100px", marginTop: "32px" }}
              ></div>
            ))
          : null}
      </div>
    </div>
  );
};

export default HomeShimmer;
