import React from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import { deliveryIcon, freeDeliveryIcon, helpcenterIcon, pandaIcon, pickupIcon, shopIcon, starIcon } from '../../../public/svg'
import Cuisines from '../../components/Cuisines'

const RestaurantProfile = () => {

    const items = [ "Italian" , "Pizza" , "Cakes" , "Dessert" , "Fast Food"]
 
 
    return (
    <section className='restaurant-profile'>


        <BreadCrumbs linkArray={['Homepage','Dhaka', 'Momo Mia']}/>

        <div className='restaurant-profile-content'>


        

            <div className='restaurant-profile-avatar'>
                <img width={`156px`} src={pandaIcon}  alt="" />

                <h3>
                    <Cuisines items={items}/>

                    Momo Miah
                    
                    </h3>

            </div>
           
            <div className='restaurant-profile-offer'>

                
                   
                   
                    <img src={deliveryIcon} alt="c" />
                    <p>Free Delivery <span>Tk 99</span></p>
                    
                    <div className="dot-separator"></div>

                    <img src={shopIcon} alt="c" />
                    <p>Min. order Tk 50</p>

             

           
            </div>


            <div className='restaurant-profile-ratings'>

                <img src={starIcon} alt="*" />
                <p>4.9/5 <span>(16)</span></p>

                <button className='btn btn-white btn-md btn-moderate'>
                    See Reviews
                </button>

            </div>

           <div className='restaurant-profile-infoBtn'>
           <button className='btn btn-white btn-md btn-moderate btn-flex'>
                <img src={helpcenterIcon} alt="i" />
                More Info
            </button>
            </div> 

        </div>


    </section>
  )
}

export default RestaurantProfile