import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { searchIcon } from "../../assets/svg";
import useDetectMouse from "../../hooks/useDetectMouse";
import useDetectOverFlow from "../../hooks/useDetectOverFlow";
import useSlide from "../../hooks/useSlide";
import { Link } from "react-router-dom";

const MenuNavbar = ({ items, links }) => {
  const [
    scrollRef,
    slideLeft,
    slideRight,
    disableLeftButton,
    disableRightButton,
  ] = useSlide();
  const [isMouse] = useDetectMouse();

  const [isOverFlowed, containerRef] = useDetectOverFlow("dish-navlinks");
  //console.log("Menu Nav Bar rendering");
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

      {isMouse && isOverFlowed && (
        <button
          className="dish-prev-button"
          disabled={disableLeftButton}
          onClick={slideLeft}
        >
          <MdOutlineArrowBackIos />
        </button>
      )}
      <div className="dish-navlinks-container" ref={containerRef}>
        <ul className="dish-navlinks " ref={scrollRef}>
          {links.map((dish, i) => (
            <li
              tabIndex={0}
              key={i}
              id={`${dish.replace(/\s+/g, "")}2`}
              onClick={() => {
                const id = dish.replace(/\s+/g, "");
                const el = document.getElementById(id);
                el &&
                  el.scrollIntoView({
                    behavior: "smooth", // Smooth scrolling animation
                    block: "center", // Align vertically to the center
                    inline: "nearest", // Align horizontally to the nearest edge
                  });
              }}
            >
              {dish}({items.filter((item) => item.tag === dish).length})
            </li>
          ))}
        </ul>
      </div>

      {isMouse && isOverFlowed && (
        <button
          className="dish-next-button"
          disabled={disableRightButton}
          onClick={slideRight}
        >
          <MdOutlineArrowForwardIos />
        </button>
      )}
    </nav>
  );
};

export default MenuNavbar;
