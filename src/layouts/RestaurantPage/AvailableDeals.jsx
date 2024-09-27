import React from 'react'
import { discountIcon, stampcardIcon, stampIllustrationIcon } from '../../../public/svg'
import Card from '../../components/Card'


const cardData = [
  {
    title: "25% OFF (YumPanda)",
    offer: "Min. order Tk 199. Discount capped at Tk 100",
    tips: "Use in cart",
    type: "cutout",
    icon: discountIcon
  },
  {
    title: "25% OFF (YumPanda)",
    offer: "Min. order Tk 199. Discount capped at Tk 100",
    tips: "Use in cart",
    type: "cutout",
    icon: discountIcon
  },
  {
    title: "25% OFF (YumPanda)",
    offer: "Min. order Tk 199. Discount capped at Tk 100",
    tips: "Use in cart",
    type: "cutout",
    icon: discountIcon
  },
  {
    title: "25% OFF (YumPanda)",
    offer: "Min. order Tk 199. Discount capped at Tk 100",
    tips: "Use in cart",
    type: "cutout",
    icon: discountIcon
  },
  {
    title: "Stamp Cards",
    tips: "Earn Rewards",
    type: "stamp",
    icon: stampcardIcon,
    bigicon: stampIllustrationIcon
  },
]


const AvailableDeals = () => {
  return (
    <section className='available-deals'>
      

      <h3>Available Deals</h3>

    
    <div className="available-deals-cards">
    { 
        cardData && 
        cardData.map((item,index)=>

       <Card key={index} item={item} />
           
      )       
      }
    </div>
    
      
      </section>
  )
}

export default AvailableDeals