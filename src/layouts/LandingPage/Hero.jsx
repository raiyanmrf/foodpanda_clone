import heroImage from '../../../public/images/refresh-hero-home-alt.webp'
import { locateIcon } from '../../../public/svg'
import HeroSearch from '../../components/HeroSearch'
import Banner from '../CityPage/Banner'

const Hero = () => {
  return (



<Banner value={`hero`} title={`It's the food and groceries you love, delivered`}>
   <HeroSearch/>
</Banner>

  
  )
}

export default Hero