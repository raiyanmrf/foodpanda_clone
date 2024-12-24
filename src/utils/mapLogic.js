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
  const locality1 = results[0]?.address_components?.filter((place) =>
    place.types.find((item) => item === "locality")
  );
  const locality2 = results[1]?.address_components?.filter((place) =>
    place.types.find((item) => item === "locality")
  );

  if (locality1?.length > 0) return locality1[0].short_name;
  else if (locality2?.length > 0) return locality2[1].short_name;
  else return "unknown";
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

export const haversineDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Radius of the Earth in kilometers
  const toRadians = (degree) => (degree * Math.PI) / 180;

  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers

  return distance;
};

export const isWithin3Km = (lat1, lng1, lat2, lng2, locality) => {
  const distance = haversineDistance(
    parseFloat(lat1),
    parseFloat(lng1),
    parseFloat(lat2),
    parseFloat(lng2)
  );
  if (locality === "dhaka") return distance <= 2;
  else return distance <= 3;
};
