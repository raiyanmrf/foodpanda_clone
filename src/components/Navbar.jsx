import { FaRegUser } from "react-icons/fa6";
import { locationNavList, lowerNavList } from "../../public/data/navData";
import {
  bagIcon,
  dropIcon,
  favIcon,
  foodpandatext,
  globeIcon,
  locationmarkIcon,
  oksignIcon,
  pandaIcon,
  profileIcon,
} from "../../public/svg";
import useIsActive from "../hooks/useIsActive";
import Button from "./Button";
import SignIn from "./SignIn";
import NavbarMenu from "./NavbarMenu";

//

const Navbar = () => {
  const [isLangActive, handleIsLangActive] = useIsActive();
  const [isMenuActive, handleIsMenuActive] = useIsActive();
  const [isSignActive, handleIsSignActive] = useIsActive();

  return (
    <nav className="nav">
      <section className="nav-bar">
        <div className="nav-bar-menu" onClick={handleIsSignActive}>
          <img src={profileIcon} height="24px" width="24px" alt="profile" />

          {/* <FaRegUser size={`24px`} /> */}

          <h4 className="nav-bar-menu-username">Raiyan</h4>
          <img
            src={dropIcon}
            className="nav-bar-menu-downarrow pink-icon"
            alt="drop"
          />
        </div>

        <div className="nav-bar-logo">
          <img src={pandaIcon} height="28px" width="28px" alt="panda" />
          <img src={foodpandatext} width="106.22px" alt="pandatext" />
        </div>

        <div className="nav-bar-location">
          {locationNavList.map((item, index) => (
            <div key={index} className="nav-bar-location-content">
              <img
                src={item.icon}
                height="24px"
                width="24px"
                alt={item.label}
              />{" "}
              <h4>{item.label}</h4>
            </div>
          ))}
        </div>

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
          <img src={favIcon} height="24px" width="24px" alt="cart" />
        </div>

        <div className="nav-bar-cart">
          <img src={bagIcon} height="24px" width="24px" alt="cart" />
        </div>
      </section>

      {/* <section className="lower-nav-bar" style={{width:'100%'}}>

     {lowerNavList.map((item,index)=> <button key={index} className="lower-nav-bar-content">
   
        <img src={item.icon} alt={item.label} /> <p>{item.label}</p>

      </button>)
}
    </section> */}

      {isMenuActive && <NavbarMenu handleIsMenuActive={handleIsMenuActive} />}
      {isSignActive && <SignIn handleIsSignActive={handleIsSignActive} />}
    </nav>
  );
};

export default Navbar;
