import React, { useRef, useState } from "react";

const useSlide = () => {
  const scrollRef = useRef(null);
  const [disableLeftButton, setDisableLeftButton] = useState(true);
  const [disableRightButton, setDisableRightButton] = useState(false);

  const slideLeft = () => {
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    const previousScrollLeft = scrollRef.current.scrollLeft;

    scrollRef.current.scrollBy({
      left: -(windowWidth - 0.4 * windowWidth),
      behavior: "smooth",
    });

    setTimeout(() => {
      const newScrollLeft = scrollRef.current.scrollLeft;
      if (newScrollLeft === previousScrollLeft) {
        //"No room to slide left!"
        setDisableRightButton(false);
        setDisableLeftButton(true);
      } else {
        setDisableRightButton(false);
        setDisableLeftButton(false);
      }
    }, 200);
  };

  const slideRight = () => {
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    const previousScrollLeft = scrollRef.current.scrollLeft;

    scrollRef.current.scrollBy({
      left: windowWidth - 0.4 * windowWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      const newScrollLeft = scrollRef.current.scrollLeft;
      if (newScrollLeft === previousScrollLeft) {
        //"No room to slide right!"
        setDisableRightButton(true);
        setDisableLeftButton(false);
      } else {
        setDisableRightButton(false);
        setDisableLeftButton(false);
      }
    }, 200);
  };

  return [
    scrollRef,
    slideLeft,
    slideRight,
    disableLeftButton,
    disableRightButton,
  ];
};

export default useSlide;
