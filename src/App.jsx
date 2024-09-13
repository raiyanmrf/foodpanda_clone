import { locateIcon } from "../public/svg";

import Navbar from "./components/Navbar";
import heroImage from '../public/images/refresh-hero-home-alt.webp'
import Home from "./pages/Home";


function App() {


  return (
    <>

<nav className="nav">
 <Navbar/>
</nav>


<main className="container">
<Home/>

</main>


</>
  )
}

export default App
