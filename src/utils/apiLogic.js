import { useQuery } from "@tanstack/react-query";

export const fetchRestaurantsArea = async (url, key) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("Items not found.");
      }
      throw new Error(`Failed to fetch ${key} data`);
    }

    return data;
  } catch (error) {
    console.error(`Error Fetching ${key}`, error);
  }

  const { isError, error, isLoading, data } = useQuery({
    queryKey: [key],
    queryFn: fetchRestaurantsArea,
  });

  return { isError, error, isLoading, data };
};
