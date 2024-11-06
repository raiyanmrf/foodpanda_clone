import { useRef, useState } from "react";

const useSlideRef = (length) => {
  const [index, setIndex] = useState(0);
  const itemRefs = useRef([]);

  const isInView = (el) => {
    const rect = el.getBoundingClientRect();
    const containerRect = el.parentNode.parentNode.getBoundingClientRect();

    const isVisible =
      rect.left > containerRect.left && rect.right < containerRect.right;
    return isVisible;
  };

  const handleToggleNextRef = () => {
    setIndex((prevIndex) => {
      let nextIndex = prevIndex;

      // for (let i = prevIndex + 1; i < length; i++) {
      //   if (itemRefs.current[i] && !isInView(itemRefs.current[i])) {
      //     nextIndex = i;
      //     break;
      //   }
      // }

      if (
        nextIndex !== prevIndex &&
        itemRefs.current[i] &&
        itemRefs.current[nextIndex + 1]
      ) {
        itemRefs.current[nextIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }

      return nextIndex;
    });
  };

  const handleTogglePrevRef = () => {
    setIndex((prevIndex) => {
      let newPrevIndex = prevIndex;

      for (let i = prevIndex - 1; i >= 0; i--) {
        if (itemRefs.current[i] && !isInView(itemRefs.current[i])) {
          newPrevIndex = i;
          break;
        }
      }

      if (newPrevIndex < 0) {
        newPrevIndex = 0;
      }

      if (newPrevIndex !== prevIndex && itemRefs.current[newPrevIndex]) {
        itemRefs.current[newPrevIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }

      return newPrevIndex;
    });
  };

  const handleHoverImpact = (index) => {
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      itemRefs.current[index].focus();
    }
  };

  return [
    itemRefs,
    handleToggleNextRef,
    handleTogglePrevRef,
    index,
    handleHoverImpact,
  ];
};

export default useSlideRef;
