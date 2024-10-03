import DishNavigation from "../../components/DishNavigation";
import FoodDisplaySection from "./FoodDisplaySection";

const DishSection = () => {
  return (
    <section className="dish">
      <DishNavigation />

      <FoodDisplaySection />
    </section>
  );
};

export default DishSection;
