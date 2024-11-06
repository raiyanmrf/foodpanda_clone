import { heroIamge } from "../../assets/images/images";

const Banner = ({ value, title, children }) => {
  return (
    <section className={`${value}`}>
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
