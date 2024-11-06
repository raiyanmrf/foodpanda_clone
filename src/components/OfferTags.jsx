import { MdFavoriteBorder } from "react-icons/md";
import { PiCrownSimpleFill } from "react-icons/pi";
import { RiDiscountPercentFill } from "react-icons/ri";

const OfferTags = ({ offer }) => {
  const isPandaPro = offer.includes("pandapro");
  return (
    <>
      <div className={`offer-tags  ${isPandaPro && "bg-violet"}`}>
        {isPandaPro ? <PiCrownSimpleFill /> : <RiDiscountPercentFill />}{" "}
        <p>{offer}</p>
      </div>
      <button className="fav-btn">
        <MdFavoriteBorder />
      </button>
    </>
  );
};

export default OfferTags;
