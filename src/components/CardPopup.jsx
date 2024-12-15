import React from "react";
import { cancelIcon, dropIcon } from "../assets/svg/index";
import { RxCross1 } from "react-icons/rx";

const CardPopup = ({ item, handleIsPopupActive }) => {
  return (
    <section className="popup-container">
      <div className="cardPopup">
        <h2>Offer Details</h2>
        <div onClick={handleIsPopupActive} className="cardPopup-cross">
          <RxCross1 />
        </div>

        <div className="cardPopup-title">
          {item.type === "pro" ? (
            <div className="pro-header-icon cardPopup-title-icon">
              <img src={item.icon} alt="pro" />
              <span>PRO</span>
            </div>
          ) : (
            <img src={item.icon} alt="pro" />
          )}

          <h1>15% off ৳50</h1>
        </div>

        <div className="cardPopup-description">
          {item.offer.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

          <details className="c" onClick={(e) => e.stopPropagation()}>
            <summary>Terms & Conditions</summary>
            <ul className="cardPopup-dropdown">
              {item.terms.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ul>
          </details>
        </div>
        {item.type === "pro" && (
          <div className="cardPopup-end">
            <h2>Tk 99/month</h2>
            <button className="btn btn-lg btn-pink">LEARN MORE</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardPopup;
