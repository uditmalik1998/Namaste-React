import React from "react";
import useDeviceType from "../../../utils/hooks/useDeviceType";

const RestaurantShimmer = () => {
  const { deviceType } = useDeviceType();
  return (
    <div
      className="shimmer_container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"16px"
      }}
    >
      <div style={{ minWidth: "800px" }}>
        <div className="shimmer" style={{ height: "181px" }}></div>
        <div
          className="shimmer"
          style={{ height: "80px", marginTop: "8px", marginBottom: "50px" }}
        ></div>
        {[1, 2, 3].map((item: number) => (
          <div
            key={item}
            className="shimmer"
            style={
              deviceType === "desktop"
                ? { height: "99px", marginTop: "16px", marginBottom: "32px" }
                : { height: "117px", marginTop: "16px", marginBottom: "32px" }
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantShimmer;
