import { useEffect } from "react";
import { useState } from "react";

const useDetectMouse = () => {
  const [isMouse, setIsMouse] = useState(false);

  useEffect(() => {
    const handleIsMouse = () => setIsMouse(true);

    window.addEventListener("mousemove", handleIsMouse);

    return () => {
      window.removeEventListener("mousemove", handleIsMouse);
    };
  }, []);

  return [isMouse];
};

export default useDetectMouse;
