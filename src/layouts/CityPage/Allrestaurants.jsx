import data from '../../../public/data/dhaka.json'
import { starIcon } from '../../../public/svg';
import one from '../../../public/images/restaurants/1.jpg'
import two from '../../../public/images/restaurants/2.jpg'
import four from '../../../public/images/restaurants/4.jpg'
import five from '../../../public/images/restaurants/5.jpg'
import six from '../../../public/images/restaurants/6.jpg'
import BreadCrumbs from '../../components/BreadCrumbs';


const Allrestaurants = () => {

  console.log(data.map(item=> item.item.servesCuisine))

    return (
        <section className="restaurant">

            

            <div className="restaurant-title">

              <BreadCrumbs linkArray={['Homepage','Dhaka']}/>
                <h1>
                All Restaurants
                </h1>
    
                
            </div>
    
            <div className="restaurant-grid">
                {data && data.map((restaurant,index)=>{

                    const {item,position} = restaurant;

                  return ( <div key={index}  className="restaurant-grid-items">
                    
                                      <ImageGenerator index={index} />
                     
                       <div  className='restaurant-grid-items-caption'>

                       <h4> {item.name}</h4>
                       
                       <p>  {item.servesCuisine[0]} </p>
                    
                    
                    <div className='restaurant-grid-items-caption-rating'>

                    <img  src={starIcon} alt="*" />
                      
                      <p>4.{position % 10} 
                          ({(item.address.postalCode + position) % 1000}0+)
                          </p> 
                     

                    </div>
                 
                   
                        
                     

                       </div>
    
                    </div>)
                })}
            </div>
        </section>
      )
}

export default Allrestaurants;










export const ImageGenerator = ({index}) => {
  return (
    
      index % 2 === 0 ? (
      <img src={one} width="596px" alt="Hi" />
      ) : index % 3 === 0 ? (
      <img src={two} width="596px" alt="Hi" />
      ) : index % 5 === 0 ? (
      <img src={four} width="596px" alt="Hi" />
      ):index % 7 === 0 ?
      (
      <img src={five} width="596px" alt="Hi" />
      ): (
      <img src={six} width="596px" alt="Hi" />
      )
      
  )
}
