import { bagIcon, dropIcon, foodpandatext, globeIcon, pandaIcon, profileIcon } from "../../public/svg"
import Button from "./Button"





const Navbar = () => {
  return (

    <nav className="nav">
      <section className="nav-bar">
    
    <div className="nav-bar-menu">

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
    
    <div className="nav-bar-langBtn">

     <button className="btn btn-md btn-white ">
     <img src={globeIcon} alt="globe" />
     <p>EN</p>
     <img src={dropIcon} className="pink-icon" alt="drop" />   
      </button> 

    </div>


    <div className="nav-bar-cart">
      <img src={bagIcon} height='24px' width='24px'  alt="cart" />
    </div>


  </section>
    </nav>
    
  )
}

export default Navbar