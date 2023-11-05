import React from "react";
import useDeviceType from "../../../utils/hooks/useDeviceType";
import HomeShimmer from "../../atoms/HomeShimmer";

const About = () => {
  const { deviceType } = useDeviceType();

  return (
    <>
      <h1>About Us</h1>
      <HomeShimmer/>
    </>
  );
};

export default About;
