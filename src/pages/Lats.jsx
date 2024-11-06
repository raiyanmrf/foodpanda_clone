import React, { useState, useEffect } from "react";

const Lats = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(`http://localhost:5000/api/sirajganj`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRestaurants(data);
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAP_API;

    const fetchCoordinates = async () => {
      const coordsList = await Promise.all(
        restaurants.map(async (restaurant) => {
          const address = `${restaurant.name}, ${restaurant.city}, Bangladesh`;
          const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=${apiKey}`;

          const geocodeResponse = await fetch(url);
          const geocodeData = await geocodeResponse.json();

          if (geocodeData.status === "OK") {
            const { lat, lng } = geocodeData.results[0].geometry.location;
            const formattedAddress = geocodeData.results[0].formatted_address;

            const updateData = {
              lat,
              long: lng, // Corrected to 'lng' here
              address: formattedAddress,
            };

            // Update the restaurant's coordinates and address in the backend
            await fetch(`http://localhost:5000/api/${restaurant._id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateData),
            });

            return {
              name: restaurant.name,
              lat,
              lng,
              address: formattedAddress,
            };
          } else {
            console.error(
              `Error finding coordinates for ${restaurant.name}:`,
              geocodeData.status
            );
            return null;
          }
        })
      );

      setCoordinates(coordsList.filter(Boolean)); // Filter out any failed lookups
    };

    fetchCoordinates();
  }, [restaurants]);

  return (
    <div>
      <h2>Restaurant Coordinates and Addresses</h2>
      <ul>
        {coordinates.map((restaurant) => (
          <li key={restaurant.name}>
            <strong>{restaurant.name}</strong>:
            <br />
            Coordinates: {restaurant.lat}, {restaurant.lng}
            <br />
            Address: {restaurant.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lats;
