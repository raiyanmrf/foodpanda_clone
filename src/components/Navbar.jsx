
import { SiFoodpanda } from "react-icons/si";
import pandaImage from '../../public/images/logo/panda.png'
import { bagIcon, dropIcon, foodpandatext, globeIcon, pandaIcon, profileIcon } from "../../public/svg"
import Button from "./Button";




const Navbar = () => {
  return (
    <div className="nav-bar">
    
      <div className="nav-bar-menu">

        <img src={profileIcon} height='24px' width='24px' alt="profile" />

      </div>

      <div className="nav-bar-logo">
        <img src={pandaIcon} height='28px' width='28px' alt="panda" />
        <img src={foodpandatext}  alt="pandatext" />
      </div>

      
      <div className="nav-bar-cart">
        <img src={bagIcon} height='24px' width='24px'  alt="cart" />
      </div>


    </div>
  )
}

export default Navbar