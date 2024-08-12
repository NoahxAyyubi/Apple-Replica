import React, { useState } from "react";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import VideoCarousel from "./components/VideoCarousel";
import Model from "./components/Model";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-black">
      <Navbar />
      <Model />
      <Hero />
      {/* <Highlights /> */}
      <VideoCarousel />
    </main>
  );
};

export default App;
