import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
      console.log("Online");
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
      console.log("Use Custom");
    });
  }, []);
  console.log('Render cus')
  return onlineStatus;
};

export default useOnlineStatus;
