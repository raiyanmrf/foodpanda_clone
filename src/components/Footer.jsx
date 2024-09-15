import React from 'react'
import { footerLinks } from '../../public/data/footerData'
import Button from './Button'
import { facebookIcon, foodpandatext, instaIcon, pandaIcon } from '../../public/svg'

const Footer = () => {
  return (
    <footer>

        <section className='upper-footer line'>
            <ul className='upper-footer-lsit'>

               
            {footerLinks.countries.map((country,index)=>  <li key={index} className="upper-footer-item">
                    <a href="">{country}</a>
                </li>
            )}
             
                

            </ul>
        </section>
        <section className='middle-footer line'>
            
          <Button title={`Bangla`} btnClass={`btn btn-md btn-white`}/>

            <ul className='middle-footer-lsit'>

               
            {footerLinks.mainLinks.map((link,index)=> 
                 <li key={index} className="middle-footer-item">
                    <a href="">{link}</a>
                </li>
            )}
             
                

            </ul>
        </section>

        <section className="lower-footer line">
            <div className='lower-footer-supplier'>
            <img src={pandaIcon} height='28px' width='28px' alt="panda" />
            <img src={foodpandatext}  alt="pandatext" />
            </div>
            <div className='lower-footer-social'>
            <img src={instaIcon} alt="instagram" />
            <img src={facebookIcon}  alt="facebook" />
            </div>
        </section>

    </footer>
  )
}

export default Footer