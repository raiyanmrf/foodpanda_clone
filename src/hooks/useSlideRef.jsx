import { useRef, useState } from "react";

const useSlideRef = (length) => {
  const [index, setIndex] = useState(0); // Start at the first card
  const cardRefs = useRef([]); // This is an array of card refs

  // Function to check if an element is in view
  const isInView = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Move to the next partially or completely hidden card
  const handleToggleNextRef = () => {
    let nextIndex = index;

    // Find the next card that isn't fully visible or is out of view
    for (let i = index + 1; i < length; i++) {
      if (cardRefs.current[i] && !isInView(cardRefs.current[i])) {
        nextIndex = i;
        console.log(nextIndex);
        break;
      }
    }

    setIndex(nextIndex);

    if (cardRefs.current[nextIndex]) {
      cardRefs.current[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  // Move to the previous card that is partially or fully out of view
  const handleTogglePrevRef = () => {
    let prevIndex = index;

    // Find the previous card that isn't fully visible
    for (let i = index - 1; i >= 0; i--) {
      if (cardRefs.current[i] && !isInView(cardRefs.current[i])) {
        prevIndex = i;
        break;
      }
    }

    setIndex(prevIndex);

    if (cardRefs.current[prevIndex]) {
      cardRefs.current[prevIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return [cardRefs, handleToggleNextRef, handleTogglePrevRef, index];
};

export default useSlideRef;
