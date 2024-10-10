import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import Carousel from "../complex/Carousel";
import { useState } from "react";

export const Galerie = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <Navbar />

      <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

      <div>
        <Footer></Footer>
      </div>
    </>
  );
};
