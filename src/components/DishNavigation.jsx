import React from "react";
import { backwardIcon, forwardIcon, searchIcon } from "../../public/svg";
import useDetectMouse from "../hooks/useDetectMouse";
import useCheckOverflow from "../hooks/useCheckOverflow";
import useSlideRef from "../hooks/useSlideRef";
import { foodNavLinks } from "../../public/data/foodData";

const DishNavigation = ({
  cardRefs,
  handleCardToggleNext,
  handleCardTogglePrev,
  index,
}) => {
  const [isMouse] = useDetectMouse();
  const [isOverFlowed, dishContainerRef, dishContentRef] = useCheckOverflow();
  // const [cardRefs, handleCardToggleNext, handleCardTogglePrev, index] =
  //   useSlideRef(foodNavLinks.fastfood.length);

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

      {isOverFlowed && isMouse && index > 0 && (
        <div className="dish-prev-button" onClick={handleCardTogglePrev}>
          <img src={backwardIcon} alt="<" />
        </div>
      )}

      <div ref={dishContainerRef} className="dish-navlinks-container">
        <ul ref={dishContentRef} className="dish-navlinks">
          {foodNavLinks.fastfood.map((dish, i) => (
            <li tabIndex={0} key={i} ref={(el) => (cardRefs.current[i] = el)}>
              {" "}
              {dish.item}({dish.number})
            </li>
          ))}
        </ul>
      </div>

      {isOverFlowed && isMouse && (
        <div className="dish-next-button" onClick={handleCardToggleNext}>
          <img height={`32px`} width={`32px`} src={forwardIcon} alt=">" />
        </div>
      )}
    </nav>
  );
};

export default DishNavigation;
