import { useState } from "react";
import useCheckOverflow from "../hooks/useCheckOverflow";
import useDetectMouse from "../hooks/useDetectMouse";
import useDetectOverFlow from "../hooks/useDetectOverFlow";
import useSlide from "../hooks/useSlide";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Slider = ({ children, title }) => {
  const [
    scrollRef,
    slideLeft,
    slideRight,
    disableLeftButton,
    disableRightButton,
  ] = useSlide();
  const [isMouse] = useDetectMouse();

  const [isOverFlowed, containerRef] = useDetectOverFlow();
  return (
    <section className="slide" ref={containerRef}>
      <h2>{title}</h2>
      <ul className="contentRef slide-ul" ref={scrollRef}>
        {children}
      </ul>

      {isMouse && isOverFlowed && (
        <div className="slide-btns">
          <button disabled={disableLeftButton} onClick={slideLeft}>
            <MdOutlineArrowBackIos />
          </button>
          <button
            disabled={disableRightButton}
            onClick={() => {
              slideRight();
            }}
          >
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      )}
    </section>
  );
};

export default Slider;
