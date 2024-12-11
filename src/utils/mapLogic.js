import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
export function handleMapLibrary() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_GOOGLE_MAP_API,
    libraries, // Use the static variable here
  });

  return { isLoaded };
}
