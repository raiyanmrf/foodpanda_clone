import React from 'react'
import { footerLinks } from '../../public/data/footerData'
import Button from './Button'
import { deliveryHeroIcon, facebookIcon, foodpandatext, instaIcon, pandaIcon } from '../../public/svg'

const Footer = () => {
  return (
    <footer>

        <section className='upper-footer line'>
            <ul className='upper-footer-list'>

               
            {footerLinks.countries.map((country,index)=>  <li key={index} className="upper-footer-list-item">
                    <a href="">{country}</a>
                </li>
            )}
             
                

            </ul>
        </section>
        <section className='middle-footer line'>
            
       

            <ul className='middle-footer-list'>
            <Button title={`Bangla`} btnClass={`btn btn-md btn-white`}/>
               
            {footerLinks.mainLinks.map((link,index)=> 
                 <li key={index} className="middle-footer-list-item">
                    <a href="">{link}</a>
                </li>
            )}
             
                <div className='panda-copyright'>© foodpanda</div>

            </ul>
        </section>

        <section className="lower-footer line">
            
          <div className="panda">
          <img src={pandaIcon}  height='28px' width='28px' alt="panda" />
          <img src={foodpandatext}  alt="pandatext" />
            </div>  
       
            <div className='lower-footer-social'>
             
             <div className='lower-footer-social-icon' >
             <img src={instaIcon} alt="instagram" />
             </div>
            
             <div className='lower-footer-social-icon' >
             <img src={facebookIcon}  alt="facebook" />
             </div>
            
             
            </div>

            <div className='deliveryhero'>
            <img src={deliveryHeroIcon} width='160px' height='32px' alt="dHero" />


            </div>
     
        </section>

    </footer>
  )
}

export default Footer