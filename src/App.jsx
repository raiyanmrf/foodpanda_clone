import { locateIcon } from "../public/svg";

import Navbar from "./components/Navbar";
import heroImage from '../public/images/refresh-hero-home-alt.webp'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import SignIn from "./components/SignIn";
import City from "./pages/City";
import RestaurantPage from "./pages/RestaurantPage";



function App() {


  return (
    <main>

 <Navbar/>




<section className="content" >

{/* <Home/> */}
{/* <City/> */}

<RestaurantPage/>


</section>


<Footer/>

</main>
  )
}

export default App
