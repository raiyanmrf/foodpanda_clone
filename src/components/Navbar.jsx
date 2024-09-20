
import useHandleDrop from "../../hooks/useHandleDrop"
import { bagIcon, dropIcon, foodpandatext, globeIcon, oksignIcon, pandaIcon, profileIcon } from "../../public/svg"
import Button from "./Button"
import Menu from "./Menu"


//


const Navbar = () => {

const [currentLangClass, handleLangDropMenu] = useHandleDrop('nav-bar-drop-wrapper');
const [currentDropMenuClass, handleDropMenu] = useHandleDrop('menu');



  return (

    <nav className="nav">
      <section className="nav-bar">
    
    <div className="nav-bar-menu" onClick={handleDropMenu}>

      <img src={profileIcon} height='24px' width='24px' alt="profile" />

    </div>

    <div className="nav-bar-logo">
      <img src={pandaIcon} height='28px' width='28px' alt="panda" />
      <img src={foodpandatext} width='106.22px'   alt="pandatext" />
    </div>

    
    <div className="nav-bar-loginBtn">
      <Button title={`Log In`} btnClass={`btn btn-md btn-white btn-border`}/>
    </div>
    
    <div className="nav-bar-signupBtn">
      <Button title={`Sign Up`} btnClass={`btn btn-md btn-pink`}/>
    </div>
    
    <div className="nav-bar-langBtn nav-bar-drop">

<div className="nav-bar-drop-content">
<button className="btn btn-md btn-white " onClick={handleLangDropMenu}>
     <img src={globeIcon} alt="globe" />
     <p>EN</p>
     <img src={dropIcon} className="pink-icon" alt="drop" />   
      </button> 
</div>
    
   <div className={currentLangClass}>
   <ul className="nav-bar-drop-items">

<li className="nav-bar-drop-single-item"><a href=""><span>English</span> <img src={oksignIcon} alt="ok" /></a></li>
<li className="nav-bar-drop-single-item"><a href=""><span>Bangla</span> <img src={oksignIcon} alt="ok" /></a></li>

</ul>
    
    </div> 
    </div>


    <div className="nav-bar-cart">
      <img src={bagIcon} height='24px' width='24px'  alt="cart" />
    </div>


  </section>


  <Menu currentDropMenuClass={currentDropMenuClass}  handleDropMenu={handleDropMenu}/>

    </nav>
    
  )
}

export default Navbar