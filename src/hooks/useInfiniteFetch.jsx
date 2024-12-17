import { useInfiniteQuery } from "@tanstack/react-query";

const LIMIT = 20;

const useInfiniteFetch = (url, key, city) => {
  const getRestaurants = async ({ pageParam = 1 }) => {
    const endpoint = `${url}/${city}?page=${pageParam}&limit=${LIMIT}`;
    const res = await fetch(endpoint);

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("We are not in this area yet.");
      }
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return { ...data, prevPage: pageParam };
  };

  const { data, fetchNextPage, isLoading, hasNextPage, isError, error } =
    useInfiniteQuery({
      queryKey: [key, city],
      queryFn: getRestaurants,
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.prevPage;
        const totalPages = Math.ceil(lastPage.count / LIMIT);
        return currentPage < totalPages ? currentPage + 1 : false;
      },
    });

  const restaurantData = data?.pages?.reduce((arr, page) => {
    return [...arr, ...page.restaurants];
  }, []);

  return { isLoading, isError, fetchNextPage, hasNextPage, restaurantData };
};

export default useInfiniteFetch;
