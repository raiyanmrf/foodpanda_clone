
import { paragraphs } from '../../public/data/paragraphs';
import ExtraDetail from '../components/ExtraDetail';
import AppAd from '../layouts/LandingPage/AppAd';
import Business from '../layouts/LandingPage/Business';
import Cities from '../layouts/LandingPage/Cities';
import Hero from '../layouts/LandingPage/Hero';
import Vendor from '../layouts/LandingPage/Vendor';



const Home = () => {
  return (
  < >  

  <Hero/>

  <Vendor/>

  <Cities/>
  
  <AppAd/>

  <Business/>


  <ExtraDetail 
    title={paragraphs.orderFood[0]}
    paragraph={paragraphs.orderFood[1]}
  />
 

      
       
 
</>
  )
}

export default Home;