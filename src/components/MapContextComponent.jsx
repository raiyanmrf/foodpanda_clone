import { useLoadScript } from "@react-google-maps/api";
import { createContext, useContext, useState } from "react";
import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import { handleMapLibrary } from "../utils/mapLogic";

const mapContext = createContext(null);

export const useMapContext = () => useContext(mapContext);

const MapContextComponent = (props) => {
  const { isLoaded } = handleMapLibrary();
  const [placeSelected, setPlaceSelected] = useState(null);
  const [areaSelected, setAreaSelected] = useState(null);

  const values = {
    isLoaded,
    placeSelected,
    setPlaceSelected,
    areaSelected,
    setAreaSelected,
  };
  return (
    <mapContext.Provider value={values}>{props.children}</mapContext.Provider>
  );
};

export default MapContextComponent;
