import React from "react";
import CardSlider from "../../molecules/CardSlider";
import useDeviceType from "../../../utils/hooks/useDeviceType";
import MobSlider from "../../atoms/MobSlider";

const About = () => {
  const { deviceType } = useDeviceType();
  console.log(deviceType, "****");
  return (
    <>
      <h1>About Us</h1>
      {deviceType === "desktop" ? <CardSlider /> : <MobSlider />}
    </>
  );
};

export default About;
