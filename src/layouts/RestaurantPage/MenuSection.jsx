import { foodNavLinks } from "../../assets/data/foodData";
import useSlideRef from "../../hooks/useSlideRef";
import MenuDisplay from "./MenuDisplay";
import MenuNavbar from "./MenuNavbar";
import menuJson from "../../utils/cuisines.json";
import React, { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../assets/svg/Loading";

const MenuSection = ({ cuisine }) => {
  const getFoodItem = async () => {
    try {
      const res = await fetch(
        `https://foodpanda-server-1zey.onrender.com/api/food-items/${cuisine}`
      );
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Items not found.");
        }
        throw new Error("Failed to fetch data");
      }

      return data;
    } catch (error) {}
  };

  const { isError, error, isLoading, data } = useQuery({
    queryKey: ["fooditems", cuisine],
    queryFn: getFoodItem,
  });

  const navlinks = [...new Set(data.map((item) => item.tag))];

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  if (!data || data.length === 0) {
    return <h1>No food items found for this cuisine.</h1>;
  }

  return (
    <section className="dish">
      <MenuNavbar items={data} links={navlinks} />

      <MenuDisplay links={navlinks} items={data} />
    </section>
  );
};

export default MenuSection;
