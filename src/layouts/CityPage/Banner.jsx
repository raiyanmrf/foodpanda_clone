import { useEffect, useRef } from "react";
import { heroIamge } from "../../assets/images/images";

const Banner = ({ value, title, children }) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    bannerRef.current.scrollIntoView({ behavior: "auto" });
  }, []);

  return (
    <section ref={bannerRef} className={`${value}`}>
      <div className={`${value}-title`}>
        <h1>{title}</h1>
      </div>
      <div className={`${value}-image`}>
        <img src={heroIamge} alt="panda" />
      </div>
      {children};
    </section>
  );
};

export default Banner;
