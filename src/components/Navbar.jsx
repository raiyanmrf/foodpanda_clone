
import useHandleDrop from "../../hooks/useHandleDrop"
import { locationNavList, lowerNavList } from "../../public/data/navData"
import { bagIcon, dropIcon, favIcon, foodpandatext, globeIcon, locationmarkIcon, oksignIcon, pandaIcon, profileIcon } from "../../public/svg"
import Button from "./Button"
import Menu from "./Menu"


//


const Navbar = () => {

const [currentLangClass, handleLangDropMenu] = useHandleDrop('nav-bar-drop-items');
const [currentDropMenuClass, handleDropMenu] = useHandleDrop('menu');



  return (

    <nav className="nav">
      <section className="nav-bar">
    
    <div className="nav-bar-menu" onClick={handleDropMenu}>

      <img src={profileIcon} height='24px' width='24px' alt="profile" />
      <h4 className="nav-bar-menu-username">Raiyan</h4>
      <img src={dropIcon} className='nav-bar-menu-downarrow pink-icon' alt="drop" />

    </div>

    <div className="nav-bar-logo">
      <img src={pandaIcon} height='28px' width='28px' alt="panda" />
      <img src={foodpandatext} width='106.22px'   alt="pandatext" />
    </div>

    <div className="nav-bar-location">
    {locationNavList.map((item,index)=> <div key={index} className="nav-bar-location-content">

    
      <img src={item.icon} height='24px' width='24px' alt={item.label} /> <h4>{item.label}</h4>
    
    </div>  )}
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
    
 
   <ul className={currentLangClass}>

<li className="nav-bar-drop-single-item"><a href=""><span>English</span> <img src={oksignIcon} alt="ok" /></a></li>
<li className="nav-bar-drop-single-item"><a href=""><span>Bangla</span> <img src={oksignIcon} alt="ok" /></a></li>

</ul>
    
   
    </div>


   

    <div className="nav-bar-cart">
      <img src={favIcon} height='24px' width='24px'  alt="cart" />
    </div>

    <div className="nav-bar-cart">
      <img src={bagIcon} height='24px' width='24px'  alt="cart" />
    </div>


  </section>


    <section className="lower-nav-bar" style={{width:'100%'}}>

     {lowerNavList.map((item,index)=> <button key={index} className="lower-nav-bar-content">
   
        <img src={item.icon} alt={item.label} /> <p>{item.label}</p>

      </button>)
}
    </section>


  <Menu currentDropMenuClass={currentDropMenuClass}  handleDropMenu={handleDropMenu}/>

    </nav>
    
  )
}

export default Navbar