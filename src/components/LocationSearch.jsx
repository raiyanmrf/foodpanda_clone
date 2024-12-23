import React, { useState } from "react";
import { LuLocateFixed } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { usePopContext } from "../hooks/PopupContextComponent";
import { useMapContext } from "./MapContextComponent";
import { handleLocateMe, handlePlaceSelection } from "../utils/mapLogic";
import usePlacesAutocomplete from "use-places-autocomplete";

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
              setIsLocationSearchPopup(true);

              // handleLocateMe(setPlaceSelected, setValue);
              // console.log("first");
              // handleLocateMe(setPlaceSelected, setValue);
              // console.log("Second");
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
