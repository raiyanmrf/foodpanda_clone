import React from "react";
import { pandaCart } from "../assets/images/images";

const ErrorPage = () => {
  return (
    <section className="error-page-container">
      <section className="error-page-content">
        <h1>404</h1>
        <div>
          <img src={pandaCart} alt="" />
          <h2>Page Not found</h2>
        </div>
      </section>
    </section>
  );
};

export default ErrorPage;
