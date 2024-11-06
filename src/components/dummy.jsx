import React from "react";
import { backwardIcon, forwardIcon } from "../../public/svg";
import useDetectMouse from "../hooks/useDetectMouse";
import useCheckOverflow from "../hooks/useCheckOverflow";
import useSlideRef from "../hooks/useSlideRef";
import DailyDeals from "../layouts/RestaurantsNearby/DailyDeals";
import FavCuisines from "../layouts/RestaurantsNearby/FavCuisines";

const Dummy = ({ title, item }) => {
  const [isMouse] = useDetectMouse();
  const [isOverFlowed, itemContainerRef, itemContentRef] = useCheckOverflow();
  const [itemRefs, handleItemToggleNext, handleItemTogglePrev, index] =
    useSlideRef(item.length);

  return (
    <section className="slider">
      <h3>{title}</h3>
      <div ref={itemContainerRef} className="slider-container">
        <div ref={itemContentRef} className="slider-content">
          {title === "Favourite Cuisines" && (
            <FavCuisines itemRefs={itemRefs} />
          )}
          {title === "Daily Deals" && <DailyDeals itemRefs={itemRefs} />}
        </div>
      </div>

      {isOverFlowed && isMouse && (
        <>
          {index > 0 && (
            <div className="prev-button" onClick={handleItemTogglePrev}>
              <img src={backwardIcon} alt="<" />
            </div>
          )}
          <div className="next-button" onClick={handleItemToggleNext}>
            <img height={`32px`} width={`32px`} src={forwardIcon} alt=">" />
          </div>
        </>
      )}
    </section>
  );
};

export default Dummy;
