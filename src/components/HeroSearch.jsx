import React from 'react'
import { locateIcon } from '../../public/svg'

const HeroSearch = () => {
  return (
    <div className="hero-location">  
    <form action="" className="hero-location-form">
      <div className="hero-location-form-locateMe">

          <input name='locateInput' placeholder='Street and Postal Code' type="text"  />
          <a className='placeholder'>Your street and street number</a>

          <button>
            <img src={locateIcon} alt="locate" className='pink-icon' />
            <span>Locate me</span>
         </button>
       
       </div> 
    
    <button 
        className="btn btn-pink btn-lg hero-location-find-btn"
        type='submit'>
           Find Food
    </button>  
      
    </form>

  

  </div>
  )
}

export default HeroSearch