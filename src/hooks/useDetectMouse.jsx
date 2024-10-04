import { useEffect, useState } from "react";

const useDetectMouse = () => {
  const [isMouse, setIsMouse] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => {
      // Only treat as a mouse if the user hasn't used touch recently
      if (!isTouch) {
        setIsMouse(true);
      }
    };

    const handleTouchStart = () => {
      setIsTouch(true);
      setIsMouse(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isTouch]);

  return [isMouse];
};

export default useDetectMouse;
