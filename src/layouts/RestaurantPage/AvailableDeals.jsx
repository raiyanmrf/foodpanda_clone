import React from 'react'

import CutoutCard from '../../components/CutoutCard'
import StampCard from '../../components/StampCard'


const cardData = [
  {
    title: "25% OFF (YumPanda)",
    offer: "Min. order Tk 199. Discount capped at Tk 100",
    type: "cutout"
  },
  {
    title: "25% OFF (YumPanda)",
    offer: "Min. order Tk 199. Discount capped at Tk 100",
    type: "cutout"
  },
  {
    title: "25% OFF (YumPanda)",
    offer: "Min. order Tk 199. Discount capped at Tk 100",
    type: "cutout"
  },
  {
    title: "25% OFF (YumPanda)",
    offer: "Min. order Tk 199. Discount capped at Tk 100",
    type: "cutout"
  },
  {
    title: "Stam Cards",
    offer: "Earn Rewards",
    type: "stamp"
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
       item.type === 'cutout' ? 
       <CutoutCard key={index} item={item} />:
       <StampCard key={index} item={item}/>
       
      )       
      }
    </div>
    
      
      </section>
  )
}

export default AvailableDeals