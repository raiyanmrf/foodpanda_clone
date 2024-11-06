import { favCusines } from "../../assets/images/favCuisines";

const FavCuisines = ({ itemRefs }) => {
  return (
    <>
      {favCusines.map((item, index) => (
        <li className="fav-cuisines" key={index}>
          <img src={item.image} alt={item.label} />
          <span>{item.label}</span>
        </li>
      ))}
    </>
  );
};

export default FavCuisines;
