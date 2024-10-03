import React from "react";
import { cancelIcon, dropIcon, proCardIcon } from "../../public/svg";
import useIsActive from "../hooks/useIsActive";
import { proTermsLists } from "../../public/data/cardData";

const CardPopup = ({
  item,
  isTermsActive,
  handleIsTermsActive,
  handleIsPopupActive,
}) => {
  console.log(isTermsActive);

  return (
    <section className="popup-container">
      <div className="card-popup-content">
        <h2>Offer Details</h2>
        <div onClick={handleIsPopupActive} className="signin-cancel">
          <img src={cancelIcon} alt="X" />
        </div>

        <div className="card-popup-title">
          {item.type === "pro" ? (
            <div className="pro-header-icon card-popup-title-icon">
              <img src={item.icon} alt="pro" />
              <span>PRO</span>
            </div>
          ) : (
            <img src={item.icon} alt="pro" />
          )}

          <h1>15% off ৳50</h1>
        </div>

        <div className="card-popup-description">
          {item.offer.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <button
            onClick={(e) => {
              e.stopPropagation(); // stop popup close when clicking on this button
              handleIsTermsActive();
            }}
            className="btn btn-white btn-md btn-moderate btn-drop"
          >
            Terms & Conditions <img src={dropIcon} alt="^" />
          </button>

          {isTermsActive && (
            <ul className="card-popup-dropdown">
              {item.terms.map((item, index) => (
                <li key={index}>
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {item.type === "pro" && (
          <div className="card-popup-end">
            <h2>Tk 99/month</h2>
            <button className="btn btn-lg btn-pink">LEARN MORE</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardPopup;
