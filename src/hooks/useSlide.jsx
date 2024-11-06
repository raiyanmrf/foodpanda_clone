import React, { useRef } from "react";

const useSlide = () => {
  const scrollRef = useRef(null);

  const slideLeft = () => {
    const windowWidth =
      (window, innerWidth || document.documentElement.clientWidth);

    scrollRef.current.scrollBy({
      left: -(windowWidth - 0.4 * windowWidth),
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    const windowWidth =
      (window, innerWidth || document.documentElement.clientWidth);

    scrollRef.current.scrollBy({
      left: windowWidth - 0.4 * windowWidth,
      behavior: "smooth",
    });
  };

  return [scrollRef, slideLeft, slideRight];
};

export default useSlide;
