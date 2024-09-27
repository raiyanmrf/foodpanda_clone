import { cutoutLeftIcon, cutoutRightIcon} from '../../public/svg'

const Card = ({item}) => {



  return (
    <section className={`card ${item.type}`}>

      <div className="card-offer">
        <img src={item.icon} width={`16px`} alt="" />
        <h4>{item.title}</h4>
      </div>
    
    
      <div className="card-details">
     

    <p> {item.offer}</p>
    <p> {item.tips}</p>
    
  
      
      </div>




   {  item.type === 'cutout' &&
    <>
    <img src={cutoutLeftIcon} 
      className="card-icon-left"
       width={`16px`} height={`14px`} alt="left" />

      <img src={cutoutRightIcon} 
      className="card-icon-right" 
       width={`16px`} height={`14px`} alt="right" />
    
    </>  }

    
   {  item.type !== 'cutout' &&
     <div className="card-icon-container">
     <img 
     className="card-icon-stamp"
      src={item.bigicon}
       alt="" />
   </div>     }




      </section>
  )
}

export default Card