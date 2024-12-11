import React, { useState } from "react";
import { LuLocateFixed } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import usePlacesAutocomplete from "use-places-autocomplete";

const LocationSearch = () => {
  const [hideAutoComplete, setHideAutoComplete] = useState(true);

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  console.log("ready", ready);
  console.log("value", value);
  console.log("status", status);
  console.log("data", data);
  return (
    <form action="" className="locationForm">
      <div className="locationForm-input">
        <input
          value={value}
          onChange={(e) => {
            setHideAutoComplete(false);
            setValue(e.target.value);
          }}
          required
          name="locateInput"
          placeholder="Street and Postal Code"
          type="text"
          disabled={!ready}
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
          <button>
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
