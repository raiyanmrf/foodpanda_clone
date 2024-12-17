import React from "react";
import { useParams } from "react-router-dom";
import { paragraphs } from "../assets/data/paragraphs";
import ExtraDetail from "../components/ExtraDetail";
import Allrestaurants from "../layouts/CityPage/Allrestaurants";
import AppDownload from "../layouts/CityPage/AppDownload";
import Banner from "../layouts/CityPage/Banner";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../assets/svg/Loading";
import useInfiniteFetch from "../hooks/useInfiniteFetch";

const LIMIT = 20;

const City = () => {
  const { city } = useParams();
  const url = "https://restaurant-server-ni4y.onrender.com/api/city";
  const key = "allRestaurants";

  const { isLoading, isError, fetchNextPage, hasNextPage, restaurantData } =
    useInfiniteFetch(url, key, city);

  // Show a loading state
  if (isLoading) {
    return (
      <section className="content">
        <Loading />
      </section>
    );
  }

  // Show error message when an error occurs
  if (isError) {
    return (
      <section className="content">
        <Banner value={`banner`} title={`Sorry! we are not in this area.`} />
      </section>
    );
  }

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
        loader={<Loading />}
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
