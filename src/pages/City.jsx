import { paragraphs } from "../../public/data/paragraphs"
import ExtraDetail from "../components/ExtraDetail"
import Allrestaurants from "../layouts/CityPage/Allrestaurants"
import AppDownload from "../layouts/CityPage/appDownload"
import Banner from "../layouts/CityPage/Banner"


const City = () => {
  return (
    <>

        <Banner value={`banner`} title={`Food Delivery from Dhaka's Best Restaurants`}/>

        <Allrestaurants/>

        <ExtraDetail title={paragraphs.dineEasy[0]} paragraph={paragraphs.dineEasy[1]}/>
        <ExtraDetail title={paragraphs.fastFood[0]} paragraph={paragraphs.fastFood[1]}/>
        <ExtraDetail title={paragraphs.orderFood[0]} paragraph={paragraphs.orderFood[1]}/>
      

        <AppDownload/>
        
    
    </>
  )
}

export default City