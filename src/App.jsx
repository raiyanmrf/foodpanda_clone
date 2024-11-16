import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import SlideExperiment from "./pages/SlideExperiment";
import { LuAtSign } from "react-icons/lu";
import Lats from "./pages/Lats";
import Loading from "./assets/svg/Loading";

// Lazy load the page components
const HomePage = lazy(() => import("./pages/HomePage"));
const City = lazy(() => import("./pages/City"));
const RestaurantPage = lazy(() => import("./pages/RestaurantPage"));
const RestaurantsNearby = lazy(() => import("./pages/RestaurantsNearby"));

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://foodpanda-server-1zey.onrender.com/api/sylhet`
        );

        const data = res.json();

        console.log(data);
      } catch (error) {
        console.error("Error Fetching:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <main>
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/city/:city" element={<City />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/nearby" element={<RestaurantsNearby />} />
            <Route path="/slide" element={<SlideExperiment />} />
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
