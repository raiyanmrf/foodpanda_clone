import { cutoutLeftIcon, cutoutRightIcon, discountIcon } from '../../public/svg'

const CutoutCard = ({item}) => {
  return (
    <section className="card">

      <div className="card-offer">
        <img src={discountIcon} width={`16px`} alt="%" />
        <h4>{item.title}</h4>
      </div>
      <div className="card-details">
     

    <p> {item.offer}</p>
    <p>Use in cart </p>

      
      </div>

      
      <img src={cutoutLeftIcon} 
      className="card-icon-left"
       width={`16px`} height={`14px`} alt="left" />

      <img src={cutoutRightIcon} 
      className="card-icon-right" 
       width={`16px`} height={`14px`} alt="right" />
      </section>
  )
}

export default CutoutCard