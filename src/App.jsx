import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";

import SignIn from "./components/SignIn";
import City from "./pages/City";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
        </Routes>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
