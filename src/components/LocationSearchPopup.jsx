import React, { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import GoogleMap from "./GoogleMap";

import { RxCross1 } from "react-icons/rx";
import { LuLocateFixed } from "react-icons/lu";
import { usePopContext } from "../hooks/PopupContextComponent";
import { useMapContext } from "./MapContextComponent";

const LocationSearchPopup = () => {
  const [hideAutoComplete, setHideAutoComplete] = useState(true);
  const { setIsLocationSearchPopup } = usePopContext();
  const { placeSelected, setPlaceSelected } = useMapContext();

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const result = await getGeocode({ address });
    const { lat, lng } = await getLatLng(result[0]);
    console.log(lat, lng);
    setIsLocationSearchPopup(true);
    setPlaceSelected({ lat, lng });
  };
  return (
    <div className="popup-container ">
      <form
        action=""
        className="locationPopup"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <RxCross1
          onClick={(e) => {
            e.stopPropagation();
            setIsLocationSearchPopup(false);
          }}
        />

        <div className="locationForm-input">
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
        {placeSelected && (
          <GoogleMap
            key={"LocationSearchPopup"}
            value={value}
            setValue={setValue}
          />
        )}
        <button className="btn btn-pink btn-lg" type="submit">
          Find Food
        </button>

        {status === "OK" && !hideAutoComplete && (
          <ul className="locationForm-autocomplete locationPopup-autocomplete ">
            {data.map((item, index) => (
              <li
                onClick={() => {
                  setValue(item.description);
                  setHideAutoComplete(true);
                  handleSelect(item.description);
                }}
                key={item.place_id}
              >
                {item.description}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default LocationSearchPopup;
