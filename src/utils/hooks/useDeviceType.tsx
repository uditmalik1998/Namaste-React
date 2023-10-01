import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  if (typeof window === "object") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  return { width: 0, height: 0 };
};

const useDeviceType = (paramDeviceType = "desktop") => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [deviceType, setDeviceType] = useState("desktop");
  let deviceResizeTimeout: any;

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(deviceResizeTimeout);
      deviceResizeTimeout = setTimeout(() => {
        setWindowDimensions(getWindowDimensions());
      }, 500);
    };

    if (typeof window === "object" && paramDeviceType === "agent") {
      const regex =
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone) |xda|xiino/i;
      const userAgent = window.navigator.userAgent;
      const mobile = regex.test(userAgent);
      if (mobile) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowDimensions.width < 768) {
      setDeviceType("mobile");
    } else if (windowDimensions.width >= 768 && windowDimensions.width < 992) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  }, [windowDimensions]);

  return { deviceType, windowDimensions };
};

export default useDeviceType;
