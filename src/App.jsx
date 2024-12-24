import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import SlideExperiment from "./pages/SlideExperiment";

import Lats from "./pages/Lats";
import Loading from "./assets/svg/Loading";
import City from "./pages/City";

// Lazy load the page components
const HomePage = lazy(() => import("./pages/HomePage"));

const RestaurantPage = lazy(() => import("./pages/RestaurantPage"));
const RestaurantsNearby = lazy(() => import("./pages/RestaurantsNearby"));

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/city/:city" element={<City />} />
            <Route
              path="/:restaurant/:restaurantID"
              element={<RestaurantPage />}
            />
            <Route path="/nearby" element={<RestaurantsNearby />} />
            <Route path="/area/:area/:lat/:lng" element={<SlideExperiment />} />
            <Route path="/lats" element={<Lats />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
