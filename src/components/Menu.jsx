import React from 'react'
import { menuList } from '../../public/data/menuData'
import { cancelIcon, dropIcon, oksignIcon } from '../../public/svg'
import useHandleDrop from '../../hooks/useHandleDrop'





const Menu = ({currentDropMenuClass,handleDropMenu}) => {


  const [currentLangDropClass,handleLangDrop] = useHandleDrop('menu-drop-items')

 
  return (
  < >
    <section className={currentDropMenuClass}>

<div className="menu-cancel" onClick={handleDropMenu}>
  <img src={cancelIcon} alt="X" />
</div>

  <ul className="menu-items">

    {menuList.map((item,index)=>{
  
return  ( <li className='menu-single-item' key={index}>
     
    { 
      index != 6 ? 
      <><img src={item.icon} alt={item.label} /> <h4>{item.label}</h4></>:
 
    <div className='menu-drop'> 
    
    <div className='menu-drop-content' onClick={handleLangDrop}>
    <img src={item.icon} alt={item.label} /> <h4>{item.label}</h4> <img src={dropIcon} className='menu-drop-content-dropIcon' alt='drop'/>
      </div>  

          <ul className={currentLangDropClass}>
              <li className="menu-drop-single-item">
                <h4>{item.label}</h4>  <img src={oksignIcon} alt="ok" />
                </li>
              <li className="menu-drop-single-item">
                <h4>{item.label2}</h4>   <img src={oksignIcon} alt="ok" />
              </li>
            </ul>
    </div> 
   
    }

     </li>
    
   ) })}



  </ul>



</section>

  </>  
  )
}

export default Menu