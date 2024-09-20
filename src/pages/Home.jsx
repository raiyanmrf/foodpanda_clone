
import { paragraphs } from '../../public/data/paragraphs';
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


    <section className='extra-detail'>


    <h3>{paragraphs.orderFood[0]}</h3>
    <p>{paragraphs.orderFood[1]}</p>

      
       
    </section>
</>
  )
}

export default Home;