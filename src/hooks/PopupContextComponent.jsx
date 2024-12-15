import { createContext, useContext, useState } from "react";

const popupContext = createContext(null);

export const usePopContext = () => useContext(popupContext);

const PopupContextComponent = (props) => {
  const [isLocationSearchPopup, setIsLocationSearchPopup] = useState(false);
  const values = {
    isLocationSearchPopup,
    setIsLocationSearchPopup,
  };
  return (
    <popupContext.Provider value={values}>
      {props.children}
    </popupContext.Provider>
  );
};

export default PopupContextComponent;
