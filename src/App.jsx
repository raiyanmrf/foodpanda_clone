import { locateIcon } from "../public/svg";

import Navbar from "./components/Navbar";
import heroImage from '../public/images/refresh-hero-home-alt.webp'
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {


  return (
    <>

<nav className="nav">
 <Navbar/>
</nav>


<main >
<Home/>

</main>


<Footer/>

</>
  )
}

export default App
