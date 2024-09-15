import React from 'react';
import { mobileImage, qrcodeImage } from '../../../public/data/images';
import { appgallerycon, appstoreIcon, playstoreIcon } from '../../../public/svg';


const AppAd = () => {
  return (
  <section>
    <h1 className='app-ad-main-title'>Put us in your pocket</h1>
    <section className="app-ad">
       
           
     
       <div className="app-ad-content">
           <h3>Download the food and groceries you love</h3>
           <div className='app-ad-content-fingrtips'>
               <img src={qrcodeImage}width='88px' height='88px' alt="" className="qr-code" />
               <p>It's all at your fingertips - the restaurants and shops you love. Find 
                   the right food and groceries to suit your mood, and make the first 
                   bite last. Go ahead, download us.</p>

           </div>

           <div className="app-ad-content-icons">
               <img src={appstoreIcon} alt="apple" />
               <img src={playstoreIcon} alt="google" />
               <img src={appgallerycon} alt="huwaie" />
           </div>
       </div>

       <div className="app-ad-main-image">
           <img src={mobileImage} alt="mobile" />
       </div>
   </section>

  </section>
  
 
  )
}

export default AppAd