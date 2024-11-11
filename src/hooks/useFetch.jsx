import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(url, {
          params: { page, limit: 50 },
        });

        // Check if there are more items to load
        if (response.data.length === 0) {
          setHasMore(false);
        } else {
          setData((prevData) => [...prevData, ...response.data]);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch if there's more data to load
    if (hasMore) fetchData();
  }, [page, url]);

  // Scroll event listener to detect when near the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      if (
        !isLoading &&
        hasMore &&
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 10
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

  return [data, isLoading, hasMore];
};

export default useFetch;
