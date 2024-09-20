import heroImage from '../../../public/images/refresh-hero-home-alt.webp'
import { locateIcon } from '../../../public/svg'

const Hero = () => {
  return (
    <section className="hero">
    <div className="hero-title">
      <h1>
      It's the food and groceries you love, delivered
      </h1>
      
    </div>
    <div className="hero-image">
  <img src={heroImage} alt="panda" />
    </div>
    
    
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
      
      <button className="btn btn-pink btn-lg hero-location-find-btn"type='submit'>
        Find Food
      </button>  
        
      </form>
  
    
  
    </div>
  
  </section>
  
  )
}

export default Hero