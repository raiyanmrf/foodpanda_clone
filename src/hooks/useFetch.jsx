import { useEffect, useState } from "react";

const useFetch = (url, key) => {
  const fetchRestaurantsArea = async () => {
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
  };

  return [];
};

export default useFetch;
