import vendorImage from "../../../public/images/vendor/office-unsplash.jpg";

const Business = () => {
  return (
    <section className="vendor">
      <div className="vendor-title">
        <h1>You prepare the food, we handle the rest</h1>
      </div>

      <div className="vendor-img">
        <img src={vendorImage} alt="vendor-image" />
      </div>

      <div className="vendor-detail">
        <h3>foodpanda for business</h3>
        <p>
          Order lunch or fuel for work-from-home, late nights in the office,
          corporate events, client meetings, and much more.
        </p>

        <button btnClass="btn btn-lg btn-pink vendor-detail-btn">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Business;
