import MenuDisplay from "./MenuDisplay";
import MenuNavbar from "./MenuNavbar";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../assets/svg/Loading";

const MenuSection = ({ cuisine }) => {
  const getFoodItem = async () => {
    try {
      const res = await fetch(
        `https://restaurant-server-ni4y.onrender.com/api/food-items/${cuisine}`
      );
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Items not found.");
        }
        throw new Error("Failed to fetch data");
      }

      return data;
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  const { isError, error, isLoading, data } = useQuery({
    queryKey: ["fooditems", cuisine],
    queryFn: getFoodItem,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  if (!data || data.length === 0) {
    return <h1>No food items found for this cuisine.</h1>;
  }
  const navlinks = [...new Set(data.map((item) => item.tag))];

  return (
    <section className="dish">
      <MenuNavbar foodItems={data} links={navlinks} />

      <MenuDisplay links={navlinks} foodItems={data} />
    </section>
  );
};

export default MenuSection;
