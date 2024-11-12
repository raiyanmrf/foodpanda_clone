import React from "react";

const Loading = () => {
  return (
    <div className="loading-svg">
      <svg width="75" height="75">
        {" "}
        {/* Reduced by 50% */}
        <circle cx="35" cy="35" r="30"></circle>{" "}
        {/* Adjusted to fit new SVG size */}
      </svg>
    </div>
  );
};

export default Loading;
