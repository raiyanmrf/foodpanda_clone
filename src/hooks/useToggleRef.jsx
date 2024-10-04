import { useRef, useState } from "react";

const useToggleRef = (length) => {
  const [index, setindex] = useState(1);
  const selectedRef = useRef(null);

  const handleToggleNextRef = () => {
    if (index < length - 1) {
      setindex(index + 1);
    } else {
      setindex(1);
    }

    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleTogglePrevRef = () => {
    if (index > 1) {
      setindex(index - 1);
    }

    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return [index, selectedRef, handleToggleNextRef, handleTogglePrevRef];
};

export default useToggleRef;
