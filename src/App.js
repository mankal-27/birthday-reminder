import React, { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import BirthdayList from "./components/BirthdayList";

function App() {
  const [birthdays, setBirthdays] = useState([]);
  const [bgImage, setBgImage] = useState("");

  const addBirthday = (name, date) => {
    setBirthdays([...birthdays, { name, date }]); // Correctly update state
  };
  // Fetch a random background image from Unsplash
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log('Fetched image data:', data); // Log the fetched data
        setBgImage(data.urls.full);
      } catch (error) {
        console.error("Error fetching image:", error);
        setBgImage("https://source.unsplash.com/random/1920x1080"); // Fallback image
      }
    };
    fetchImage();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-lg w-full mx-4">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Birthday Wisher
        </h1>
        <InputForm addBirthday={addBirthday} />
        <BirthdayList birthdays={birthdays} />
      </div>
    </div>
  );
}

export default App;
