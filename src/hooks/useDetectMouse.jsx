import { useEffect } from "react";
import { useState } from "react";

const useDetectMouse = () => {
  const [isMouse, setIsMouse] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleIsMouse = () => {
      setIsMouse(true);
      setIsTouch(false);
    };

    const handleIsTouch = () => {
      setIsMouse(false);
      setIsTouch(truw);
    };

    window.addEventListener("mousemove", handleIsMouse);
    window.addEventListener("touchmove", handleIsTouch);

    return () => {
      window.removeEventListener("mousemove", handleIsMouse);
      window.removeEventListener("touchmove", handleIsTouch);
    };
  }, []);

  return [isMouse, isTouch];
};

export default useDetectMouse;
