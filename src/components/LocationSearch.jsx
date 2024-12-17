import React, { useState } from "react";
import { LuLocateFixed } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { usePopContext } from "../hooks/PopupContextComponent";
import { useMapContext } from "./MapContextComponent";
import {
  getLocality,
  handleLocateMe,
  handlePlaceSelection,
} from "../utils/mapLogic";

const LocationSearch = () => {
  const [hideAutoComplete, setHideAutoComplete] = useState(true);
  const { setIsLocationSearchPopup } = usePopContext();
  const { setPlaceSelected } = useMapContext();
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  // const handleSelect = async (address) => {
  //   setValue(address, false);
  //   clearSuggestions();

  //   const result = await getGeocode({ address });
  //   const locality = getLocality(result);
  //   const { lat, lng } = await getLatLng(result[0]);
  //   console.log("handleSelect", { lat, lng, locality: locality });
  //   setIsLocationSearchPopup(true);
  //   setPlaceSelected({ lat, lng, locality: locality, address: address });
  // };

  return (
    <form
      action=""
      className="locationForm"
      onSubmit={(e) => {
        e.preventDefault();
        handlePlaceSelection(
          value,
          setIsLocationSearchPopup,
          setPlaceSelected,
          setValue,
          clearSuggestions
        );
        setValue("");
      }}
    >
      <div className="locationForm-input" style={{ position: "relative" }}>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setHideAutoComplete(false);
          }}
          required
          name="locateInput"
          placeholder="Street and Postal Code"
          type="text"
          disabled={!ready}
          style={{ position: "relative" }}
        />
        <a htmlFor="locateInput" className="placeholder">
          Your street and street number
        </a>

        {data.length > 0 ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setValue("");
            }}
          >
            <RxCross1 size={"20px"} />
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLocateMe(setPlaceSelected, setValue);
            }}
          >
            <LuLocateFixed size={"20px"} className="pink-icon" />
            <span>Locate me</span>
          </button>
        )}
      </div>

      <button
        className="btn btn-pink btn-lg locationForm-findBtn"
        type="submit"
      >
        Find Food
      </button>

      {status === "OK" && !hideAutoComplete && (
        <ul className="locationForm-autocomplete">
          {data.map((item, index) => (
            <li
              onClick={() => {
                setValue(item.description);
                setHideAutoComplete(true);
              }}
              key={item.place_id}
            >
              {item.description}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default LocationSearch;
