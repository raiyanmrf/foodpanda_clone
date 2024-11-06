import React from "react";
import { forwardIcon } from "../assets/svg";

const BreadCrumbs = ({ linkArray }) => {
  return (
    <ul className="breadcrumbs">
      {linkArray.map((item, index) => {
        return (
          <li key={index}>
            {index !== linkArray.length - 1 ? (
              <>
                <p className="breadcrumbs-link">{item}</p>

                <img width={`20px`} src={forwardIcon} />
              </>
            ) : (
              <p>{item}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default BreadCrumbs;
