import React from "react";
import { forwardIcon } from "../assets/svg";
import { useNavigate } from "react-router-dom";

const BreadCrumbs = ({ linkArray }) => {
  const navigate = useNavigate();
  return (
    <ul className="breadcrumbs">
      {linkArray.map((item, index) => {
        return (
          <li key={index}>
            {index !== linkArray.length - 1 ? (
              <>
                <p
                  onClick={() => {
                    item === "Homepage" && navigate("/");
                  }}
                  className="breadcrumbs-link"
                >
                  {item}
                </p>

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
