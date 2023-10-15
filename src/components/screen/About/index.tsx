import React from "react";
import useDeviceType from "../../../utils/hooks/useDeviceType";
import Demo from "../../atoms/Demo";
import MobImage from "../../atoms/MobImage";
import ImageSlider from "../../atoms/ImageSlider";

const About = () => {
  const { deviceType } = useDeviceType();
  console.log(deviceType, "****");
  return (
    <>
      <h1>About Us</h1>
      <Demo>
        <MobImage
          imageId="cfa1123ebf17413dc7d0a80c7361fab3"
          discountPercentage="30%"
          discountPrice="998"
        />
      </Demo>
    </>
  );
};

export default About;
