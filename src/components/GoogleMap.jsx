import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import React from "react";
import { useMapContext } from "./MapContextComponent";
import { usePopContext } from "../hooks/PopupContextComponent";
import { getGeocode } from "use-places-autocomplete";
import { getLocality } from "../utils/mapLogic";

const GoogleMap = ({ setValue }) => {
  const { placeSelected, setPlaceSelected } = useMapContext();

  const apiKey = import.meta.env.VITE_REACT_GOOGLE_MAP_API;
  const mapId = import.meta.env.VITE_REACT_GOOGLE_MAP_ID;

  const { isLocationSearchPopup } = usePopContext();
  const handleMarkerDrag = async (e) => {
    const newLat = e.latLng.lat();
    const newLng = e.latLng.lng();

    try {
      const results = await getGeocode({
        location: { lat: newLat, lng: newLng },
      });
      const newValue = results[0].formatted_address;
      const locality = getLocality(results);
      setValue(newValue);
      setPlaceSelected({
        lat: newLat,
        lng: newLng,
        locality,
        address: newValue,
      });
    } catch (error) {
      console.error("error in dragging func", error);
    }
  };

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "50vh", width: "100%" }}>
        {
          <Map
            maxZoom={20}
            minZoom={15}
            defaultZoom={15}
            center={placeSelected}
            mapId={mapId}
            fullscreenControl={false}
            streetViewControl={false}
            keyboardShortcuts={false}
          >
            <AdvancedMarker
              position={placeSelected}
              draggable={!!isLocationSearchPopup}
              onDragEnd={(e) => {
                if (isLocationSearchPopup) {
                  handleMarkerDrag(e);
                  handleMarkerDrag(e);
                }
              }}
            />
          </Map>
        }
      </div>
    </APIProvider>
  );
};

export default GoogleMap;
