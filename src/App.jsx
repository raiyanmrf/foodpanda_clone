import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Footer from "./components/Footer";

import SignIn from "./components/SignIn";
import City from "./pages/City";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  return (
    <main>
      <Navbar />

      <section className="content">
        {/* <Home/> */}
        {/* <City/> */}

        <RestaurantPage />
      </section>

      <Footer />
    </main>
  );
}

export default App;
