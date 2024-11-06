import React from "react";
import appImage from "../../../public/images/city-foodpanda-apps.webp";
import { appstoreIcon, playstoreIcon } from "../../assets/svg";

const AppDownload = () => {
  return (
    <section className="app-download">
      <img className="app-download-invisible" src={appImage} alt="apps" />
      <p className="app-download-invisible">Download our free app!</p>
      <img width={`110px`} src={appstoreIcon} alt="apps" />
      <img width={`110px`} src={playstoreIcon} alt="apps" />
    </section>
  );
};

export default AppDownload;
