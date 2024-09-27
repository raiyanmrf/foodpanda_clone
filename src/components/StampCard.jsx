import { discountIcon, stampcardIcon, stampIllustrationIcon } from '../../public/svg'

const StampCard = ({item}) => {
  return (
    <section className="card stamp" >

      <div className="card-offer">
        <img src={stampcardIcon} width={`16px`} alt="%" />
        <h4>{item.title}</h4>
      </div>
      <div className="card-details">
     

    <p> {item.offer}</p>
    <p> {item.tips}</p>
 
      
      </div>

      <div className="card-icon-container">
        <img className="card-icon-stamp" src={stampIllustrationIcon} alt="illus" />
      </div>     
    
      </section>
  )
}

export default StampCard