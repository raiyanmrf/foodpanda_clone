import React, { useState } from "react";
import { LuLocateFixed } from "react-icons/lu";
import usePlacesAutocomplete from "use-places-autocomplete";

const LocationSearch = () => {
  const [searchedItems, setSearchedItems] = useState(null);

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  return (
    <form action="" className="locationForm">
      <div className="locationForm-input">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          name="locateInput"
          placeholder="Street and Postal Code"
          type="text"
          disabled={!ready}
        />
        <label htmlFor="locateInput" className="placeholder">
          Your street and street number
        </label>

        <button>
          <LuLocateFixed size={"20px"} className="pink-icon" />
          <span>Locate me</span>
        </button>
      </div>

      <button
        className="btn btn-pink btn-lg locationForm-findBtn"
        type="submit"
      >
        Find Food
      </button>

      <ul className="location-autocomplete">
        {status === "Ok" &&
          data.map((place_id, description) => (
            <li key={place_id} value={description}>
              {description}
            </li>
          ))}
      </ul>
    </form>
  );
};

export default LocationSearch;
