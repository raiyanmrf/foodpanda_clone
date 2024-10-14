import Navbar from "./components/Navbar";
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";

import SignIn from "./components/SignIn";
import City from "./pages/City";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  return (
    <HashRouter>
      <main>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
        </Routes>

        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
