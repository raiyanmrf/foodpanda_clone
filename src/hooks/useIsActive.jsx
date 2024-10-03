import { useState } from "react";

const useIsActive = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return [isActive, handleIsActive];
};

export default useIsActive;
