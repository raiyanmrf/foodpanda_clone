import { FaRegUser } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { locationNavList, lowerNavList } from "../assets/data/navData";
import {
  dropIcon,
  foodpandatext,
  globeIcon,
  oksignIcon,
  pandaIcon,
} from "../assets/svg";
import useIsActive from "../hooks/useIsActive";
import Button from "./Button";
import SignIn from "./SignIn";
import NavbarMenu from "./NavbarMenu";
import { getTotalCartItemsCount } from "../utils/cartLogic";
import { useContext } from "react";
import { cartContext } from "../hooks/CartContext";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { usePopContext } from "../hooks/PopupContextComponent";
import LocationSearchPopup from "./LocationSearchPopup";
import { useMapContext } from "./MapContextComponent";
import SignupModal from "./SignupModal";
import { useAuthContext } from "../hooks/AuthContext";
import LoginPopup from "./LoginPopup";
//

const Navbar = () => {
  const { cartItems } = useContext(cartContext);
  const [isLangActive, handleIsLangActive] = useIsActive();
  const [isMenuActive, handleIsMenuActive] = useIsActive();

  const { isLocationSearchPopup } = usePopContext();
  const { navbarLocation } = useMapContext();
  const { setIsLocationSearchPopup } = usePopContext();

  const {
    isSignupPopup,
    setIsSignupPopup,
    isAuthPopup,
    setIsAuthPopup,
    isLoginPopup,
    setIsLoginPopup,
  } = useAuthContext();

  return (
    <nav className="nav">
      <section className="nav-bar">
        <div
          className="nav-bar-menu"
          onClick={(e) => {
            e.stopPropagation();
            setIsAuthPopup(true);
          }}
        >
          <FaRegUser />
        </div>

        <div className="nav-bar-logo">
          <img src={pandaIcon} height="28px" width="28px" alt="panda" />
          <img src={foodpandatext} width="106.22px" alt="pandatext" />
        </div>

        {navbarLocation && (
          <div className="nav-bar-location">
            {locationNavList.map((item, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  index === 0 && setIsLocationSearchPopup(true);
                }}
                className="nav-bar-location-content"
              >
                <img
                  src={item.icon}
                  height="24px"
                  width="24px"
                  alt={item.label}
                />{" "}
                {index === 0 ? (
                  <h4>{navbarLocation.locality}</h4>
                ) : (
                  <h4>{item.label}</h4>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="nav-bar-loginBtn">
          <Button
            title={`Log In`}
            btnClass={`btn btn-md btn-white btn-border`}
          />
        </div>

        <div className="nav-bar-signupBtn">
          <Button title={`Sign Up`} btnClass={`btn btn-md btn-pink`} />
        </div>

        <div className="nav-bar-langBtn nav-bar-drop">
          <div className="nav-bar-drop-content">
            <button
              className="btn btn-md btn-white "
              onClick={handleIsLangActive}
            >
              <img src={globeIcon} alt="globe" />
              <p>EN</p>
              <img src={dropIcon} className="pink-icon" alt="drop" />
            </button>
          </div>

          {isLangActive && (
            <ul className="nav-bar-drop-items">
              <li className="nav-bar-drop-single-item">
                <a href="">
                  <span>English</span> <img src={oksignIcon} alt="ok" />
                </a>
              </li>
              <li className="nav-bar-drop-single-item">
                <a href="">
                  <span>Bangla</span> <img src={oksignIcon} alt="ok" />
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="nav-bar-cart">
          <FaRegHeart />
        </div>

        <div className="nav-bar-cart">
          <IoBagOutline />
          <span className="nav-bar-cart-count">
            {getTotalCartItemsCount(cartItems) || ""}
          </span>
        </div>
      </section>

      {/* <section className="lower-nav-bar" style={{width:'100%'}}>

     {lowerNavList.map((item,index)=> <button key={index} className="lower-nav-bar-content">
   
        <img src={item.icon} alt={item.label} /> <p>{item.label}</p>

      </button>)
}
    </section> */}
      {isSignupPopup && <SignupModal />}
      {isMenuActive && <NavbarMenu handleIsMenuActive={handleIsMenuActive} />}
      {isAuthPopup && <SignIn />}
      {isLocationSearchPopup && <LocationSearchPopup />}
      {isLoginPopup && <LoginPopup />}
    </nav>
  );
};

export default Navbar;
