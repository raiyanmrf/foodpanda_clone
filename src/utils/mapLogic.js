import { useLoadScript } from "@react-google-maps/api";
import { getGeocode, getLatLng } from "use-places-autocomplete";

const libraries = ["places"];
export function handleMapLibrary() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_GOOGLE_MAP_API,
    libraries, // Use the static variable here
  });

  return { isLoaded };
}

export const handleLocateMe = (setPlaceSelected, setValue) => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const placeOrds = { lat: latitude, lng: longitude };

      // Fetch the address asynchronously
      getGeocode({ location: placeOrds })
        .then((results) => {
          const newAddress =
            results[0]?.formatted_address || "Address not found";
          const locality = getLocality(results);
          setPlaceSelected({
            lat: latitude,
            lng: longitude,
            locality: locality,
            address: newAddress,
          });
          setValue(newAddress);
          console.log("locateME", results);
        })
        .catch((error) => {
          console.error("Error fetching geocode:", error.message);
        });
    },
    (error) => {
      console.error("Geolocation error:", error.message);
      alert("Unable to retrieve your location");
    }
  );
};

export const getLocality = (results) => {
  const locality = results[0].address_components.filter((place) =>
    place.types.find((item) => item === "locality")
  );

  if (locality.length > 0) return locality[0].short_name;
  else return undefined;
};

export const handlePlaceSelection = async (
  address,
  setIsLocationSearchPopup,
  setPlaceSelected,
  setValue,
  clearSuggestions
) => {
  setValue(address, false);
  clearSuggestions();

  const result = await getGeocode({ address });
  const { lat, lng } = await getLatLng(result[0]);
  const locality = getLocality(result);

  setIsLocationSearchPopup(true);
  setPlaceSelected({ lat, lng, locality: locality, address: address });

  console.log("handleSelect", {
    lat,
    lng,
    locality: locality,
    address: address,
  });
};

export const handleRestaurantsNearbyPageNavigation = () => {};
