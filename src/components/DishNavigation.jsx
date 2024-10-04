import React from "react";
import { backwardIcon, forwardIcon, searchIcon } from "../../public/svg";
import useDetectMouse from "../hooks/useDetectMouse";
import useCheckOverflow from "../hooks/useCheckOverflow";
import useSlideRef from "../hooks/useSlideRef";
import { foodNavLinks } from "../../public/data/foodData";

const DishNavigation = () => {
  const [isMouse, isTouch] = useDetectMouse();
  const [isOverFlowed, dishContainerRef, dishContentRef] = useCheckOverflow();
  const [cardRefs, handleCardToggleNext, handleCardTogglePrev, index] =
    useSlideRef(foodNavLinks.fastfood.length);

  return (
    <nav className="dish-navigation">
      <form className="dish-searchbar">
        <img src={searchIcon} alt="search" />
        <input
          placeholder="Search in Menu"
          type="text"
          className="dish-searchbar-input"
        />
      </form>

      {isOverFlowed && isMouse && !isTouch && index > 0 && (
        <div className="dish-prev-button" onClick={handleCardTogglePrev}>
          <img src={backwardIcon} alt="<" />
        </div>
      )}

      <div ref={dishContainerRef} className="dish-navlinks-container">
        <ul ref={dishContentRef} className="dish-navlinks">
          {foodNavLinks.fastfood.map((dish, index) => (
            <li key={index} ref={(el) => (cardRefs.current[index] = el)}>
              {dish.item}({dish.number})
            </li>
          ))}
        </ul>
      </div>

      {isOverFlowed && isMouse && !isTouch && (
        <div className="dish-next-button" onClick={handleCardToggleNext}>
          <img height={`32px`} width={`32px`} src={forwardIcon} alt=">" />
        </div>
      )}
    </nav>
  );
};

export default DishNavigation;
