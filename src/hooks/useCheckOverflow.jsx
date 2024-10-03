import React, { useRef, useState } from "react";
import { useEffect } from "react";

const useCheckOverflow = () => {
  const [isOverFlowed, setIsOverFlowed] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const checkOverFlow = () => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (container && content) {
      // const isOverflowingHorizontally =
      //   content.clientWidth > container.clientWidth;
      // const isOverflowingVertically =
      //   content.clientHeight > container.clientHeight;

      // setIsOverFlowed(isOverflowingHorizontally || isOverflowingVertically);

      const listItems = content.children;

      // Check if any list item overflows the container
      let itemOverflows = false;
      for (let item of listItems) {
        const itemRect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // If the item's right edge is outside the container's right edge, it's overflowing
        if (
          itemRect.right > containerRect.right ||
          itemRect.left < containerRect.left
        ) {
          itemOverflows = true;
          break;
        }
      }

      setIsOverFlowed(itemOverflows);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      checkOverFlow();
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [isOverFlowed, containerRef, contentRef];
};

export default useCheckOverflow;
