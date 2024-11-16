import React from "react";

const BuisinessAd = ({ item, handleClick }) => {
  return (
    <section className="vendor">
      <div className="vendor-title">
        <h1>You prepare the food, we handle the rest</h1>
      </div>

      <div className="vendor-img">
        <img src={item.image} alt="vendor-image" />
      </div>

      <div className="vendor-detail">
        <h3>{item.title}</h3>
        {item.detail.map((paragrapgh, i) => (
          <p key={i}>{paragrapgh}</p>
        ))}

        <button
          onClick={handleClick}
          className="btn btn-lg btn-pink vendor-detail-btn"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default BuisinessAd;
