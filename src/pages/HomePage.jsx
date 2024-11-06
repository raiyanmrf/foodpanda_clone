import { paragraphs } from "../assets/data/paragraphs";
import { startBusinessAd, vendorAd } from "../assets/data";
import BuisinessAd from "../components/BuisinessAd";
import ExtraDetail from "../components/ExtraDetail";
import AppAd from "../layouts/LandingPage/AppAd";
import Cities from "../layouts/LandingPage/Cities";
import Hero from "../layouts/LandingPage/Hero";

const HomePage = () => {
  return (
    <section className="content">
      <Hero />

      <BuisinessAd item={vendorAd} />

      <Cities />

      <AppAd />

      <BuisinessAd item={startBusinessAd} />

      <ExtraDetail
        title={paragraphs.orderFood[0]}
        paragraph={paragraphs.orderFood[1]}
      />
    </section>
  );
};

export default HomePage;
