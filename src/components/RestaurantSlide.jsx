import React from "react";
import { starIcon } from "../assets/svg";
import { LuClock4, LuDot } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { RxTriangleDown } from "react-icons/rx";
import OfferTags from "./OfferTags";
import alternateImage from "../assets/images/imageGenerator/alternative.webp";

const RestaurantSlide = ({ data, query }) => {
  return (
    <>
      {data
        .filter((item) => item.offer && item.offer.includes(query))
        .map((item, index) => {
          return (
            <li className="restaurant-slide" key={index}>
              {item.image ? (
                <img
                  width={"400px"}
                  height={"400px"}
                  src={item.image}
                  alt={item.name}
                />
              ) : (
                <img
                  width={"400px"}
                  height={"400px"}
                  src={alternateImage}
                  alt={item.name}
                />
              )}
              <div className=" restaurant-slide-info">
                <h3>{item.name ?? "Unavailable"}</h3>
                <p>
                  <img width={`16px`} src={starIcon} />
                  <strong>{item.ratings ?? "4.4"}</strong>
                  <span>{item.reviews ?? "(100+))"}</span>
                </p>

                <p>৳ • {item.cuisine ?? "Bangladeshi"}</p>
                <p>
                  <LuClock4 />
                  <span>10-25min</span>
                  <LuDot />
                  <MdDeliveryDining />
                  <span>Tk50</span>
                  <RxTriangleDown />
                </p>
              </div>
              <OfferTags offer={item.offer} />
            </li>
          );
        })}
    </>
  );
};

export default RestaurantSlide;
