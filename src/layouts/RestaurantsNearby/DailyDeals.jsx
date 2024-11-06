import React from "react";
import { dailyDealsImage } from "../../assets/images/dailyDeals";

const DailyDeals = ({ itemRefs }) => {
  return (
    <>
      {dailyDealsImage.map((item, index) => (
        <li className="daily-deals" key={index}>
          <img width={"280px"} src={item} alt={item.label} />
        </li>
      ))}
    </>
  );
};

export default DailyDeals;
