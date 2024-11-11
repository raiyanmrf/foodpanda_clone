import { useParams } from "react-router-dom";
import { paragraphs } from "../assets/data/paragraphs";
import ExtraDetail from "../components/ExtraDetail";
import Allrestaurants from "../layouts/CityPage/Allrestaurants";
import AppDownload from "../layouts/CityPage/AppDownload";
import Banner from "../layouts/CityPage/Banner";
import { useInfiniteQuery } from "@tanstack/react-query";

import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT = 20;

const City = () => {
  const { city } = useParams();

  const getRestaurants = async ({ pageParam = 1 }) => {
    const endpoint = `http://localhost:5000/api/${city}?page=${pageParam}&limit=${LIMIT}`;

    const res = await fetch(endpoint);

    const data = await res.json();

    return { ...data, prevPage: pageParam };
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["restaurants", city],
    queryFn: getRestaurants,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.prevPage;
      const totalPages = Math.ceil(lastPage.count / LIMIT);

      return currentPage < totalPages ? currentPage + 1 : false;
    },
  });

  console.log("data", data);

  const restaurantData = data?.pages.reduce((arr, page) => {
    return [...arr, ...page.restaurants];
  }, []);

  console.log(restaurantData);
  return (
    <section className="content">
      <Banner
        value={`banner`}
        title={`Food Delivery from ${city}'s Best Restaurants`}
      />

      <InfiniteScroll
        dataLength={restaurantData ? restaurantData.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<div>Loading...</div>}
        style={{ overflow: "hidden" }}
      >
        {restaurantData && <Allrestaurants data={restaurantData} />}
      </InfiniteScroll>

      <ExtraDetail
        title={paragraphs.dineEasy[0]}
        paragraph={paragraphs.dineEasy[1]}
      />
      <ExtraDetail
        title={paragraphs.fastFood[0]}
        paragraph={paragraphs.fastFood[1]}
      />
      <ExtraDetail
        title={paragraphs.orderFood[0]}
        paragraph={paragraphs.orderFood[1]}
      />
      <AppDownload />
    </section>
  );
};

export default City;
