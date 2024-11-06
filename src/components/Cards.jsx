import React from "react";
import { cutoutLeftIcon, cutoutRightIcon } from "../assets/svg";
import CardPopup from "./CardPopup";
import { cardOfferDetails } from "../assets/data/cardData";
import useIsActive from "../hooks/useIsActive";

const Cards = React.forwardRef(({ item }, ref) => {
  const [isPopupActive, handleIsPopupActive] = useIsActive();
  const [isTermsActive, handleIsTermsActive] = useIsActive();

  return (
    <section
      ref={ref}
      className={`card ${item.type}`}
      onClick={handleIsPopupActive}
    >
      <div className="card-offer">
        {item.type === "pro" ? (
          <div className="pro-header-icon">
            <img src={item.icon} width={`16px`} alt="" />
            <span>PRO</span>
          </div>
        ) : (
          <img src={item.icon} width={`16px`} alt="" />
        )}
        <h4>{item.title}</h4>
      </div>

      <div className="card-details">
        <p> {item.offer}</p>
        <p> {item.tips}</p>
      </div>

      {item.type === "cutout" ? (
        <>
          <img
            src={cutoutLeftIcon}
            className="card-icon-left"
            width={`16px`}
            height={`14px`}
            alt="left"
          />
          <img
            src={cutoutRightIcon}
            className="card-icon-right"
            width={`16px`}
            height={`14px`}
            alt="right"
          />{" "}
        </>
      ) : (
        <div className={`${item.type}-icon-container`}>
          <img className={`${item.type}-icon`} src={item.bigicon} alt="" />
        </div>
      )}

      {isPopupActive && (
        <CardPopup
          key={item.type}
          item={cardOfferDetails[item.type]}
          handleIsPopupActive={handleIsPopupActive}
          isTermsActive={isTermsActive}
          handleIsTermsActive={handleIsTermsActive}
        />
      )}
    </section>
  );
});

export default Cards;
