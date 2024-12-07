import React, { Fragment, useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { searchIcon } from "../../assets/svg";
import useDetectMouse from "../../hooks/useDetectMouse";
import useDetectOverFlow from "../../hooks/useDetectOverFlow";
import useSlide from "../../hooks/useSlide";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import {
  handleScrollIntoView,
  handleSearching,
} from "../../utils/navigationLogic";

const MenuNavbar = ({ foodItems, links }) => {
  const [searchedItems, setSearchedItems] = useState([]);
  const [
    scrollRef,
    slideLeft,
    slideRight,
    disableLeftButton,
    disableRightButton,
  ] = useSlide();
  const [isMouse] = useDetectMouse();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverFlowed, containerRef] = useDetectOverFlow("dish-navlinks");

  return (
    <nav className="dish-navigation">
      <section className="dish-searchbar">
        {isExpanded ? (
          <RxCross1
            onClick={() => {
              setIsExpanded(false);
            }}
          />
        ) : (
          <IoIosSearch
            onClick={() => {
              setIsExpanded(true);
            }}
          />
        )}

        <input
          className={`dish-searchbar-input ${!isExpanded && "hide-input"}`}
          placeholder="Search in Menu"
          type="text"
          onChange={(e) => {
            handleSearching(e.target.value, setSearchedItems);
          }}
        />
        {searchedItems.length > 0 && (
          <div className="dish-navigation-searchList">
            {searchedItems.map((item, index) => (
              <p
                onClick={() => {
                  setIsExpanded(false);
                  setSearchedItems([]);

                  handleScrollIntoView(item.name);
                }}
                key={index}
              >
                {item.name}
              </p>
            ))}
          </div>
        )}
      </section>

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
              onClick={() => {
                handleScrollIntoView(dish);
              }}
            >
              {dish}({foodItems.filter((item) => item.tag === dish).length})
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
