import { createContext, useContext, useMemo, useState } from "react";
import React from "react";
import { handleMapLibrary } from "../utils/mapLogic";

import { useEffect } from "react";

const mapContext = createContext(null);

export const useMapContext = () => useContext(mapContext);

const MapContextComponent = (props) => {
  const { isLoaded } = handleMapLibrary();
  const [placeSelected, setPlaceSelected] = useState(null);
  const [areaSelected, setAreaSelected] = useState(null);
  const [navbarLocation, setNavbarLocation] = useState(null);

  const values = {
    placeSelected,
    setPlaceSelected,
    areaSelected,
    setAreaSelected,
    navbarLocation,
    setNavbarLocation,
    isLoaded,
  };
  return (
    <mapContext.Provider value={values}>{props.children}</mapContext.Provider>
  );
};

export default MapContextComponent;
