import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import image_1 from "../assets/images/image_1.png";
import image_2 from "../assets/images/image_2.png";
import image_3 from "../assets/images/image_3.png";
import image_4 from "../assets/images/image_4.png";
import image_5 from "../assets/images/image_5.png";
import image_6 from "../assets/images/image_6.png";
import image_7 from "../assets/images/image_7.png";
import image_8 from "../assets/images/image_8.png";
import image_9 from "../assets/images/image_9.png";
import image_10 from "../assets/images/image_10.png";
import image_11 from "../assets/images/image_11.png";
import image_12 from "../assets/images/image_12.png";
import image_13 from "../assets/images/image_13.png";
import image_14 from "../assets/images/image_14.png";
import image_15 from "../assets/images/image_15.png";
import image_16 from "../assets/images/image_16.png";
import image_17 from "../assets/images/image_17.png";
import image_18 from "../assets/images/image_18.png";
import image_19 from "../assets/images/image_19.png";
import image_20 from "../assets/images/image_20.png";
import image_21 from "../assets/images/image_21.png";
import image_22 from "../assets/images/image_22.png";
import image_23 from "../assets/images/image_23.png";
import image_24 from "../assets/images/image_24.png";
import image_25 from "../assets/images/image_25.png";
import image_26 from "../assets/images/image_26.png";
import image_27 from "../assets/images/image_27.png";
import image_28 from "../assets/images/image_28.png";
import image_29 from "../assets/images/image_29.png";
import image_30 from "../assets/images/image_30.png";
import "../styling/carousel.css";

const Carousel = ({ currentIndex, setCurrentIndex }) => {
  const images = useMemo(
    () => [
      image_1,
      image_2,
      image_3,
      image_4,
      image_5,
      image_6,
      image_7,
      image_8,
      image_9,
      image_10,
      image_11,
      image_12,
      image_13,
      image_14,
      image_15,
      image_16,
      image_17,
      image_18,
      image_19,
      image_20,
      image_21,
      image_22,
      image_23,
      image_24,
      image_25,
      image_26,
      image_27,
      image_28,
      image_29,
      image_30,
    ],
    []
  );
  const [isLoaded, setIsLoaded] = useState(true); // Start as true for the first image

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, [images]);

  // Function to move to the next image
  const nextImage = () => {
    setIsLoaded(false); // Set to false to start the transition
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsLoaded(true); // Set to true once image changes
    }, 1500); // Wait for 1.5 seconds (transition duration)
  };

  // Function to move to the previous image
  const prevImage = () => {
    setIsLoaded(false); // Set to false to start the transition
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsLoaded(true); // Set to true once image changes
    }, 1500); // Wait for 1.5 seconds (transition duration)
  };

  // Timer logic to automatically cycle images
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000); // 12 seconds: 10 for typing + 2 seconds to read

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      <button
        className="carousel__button prev"
        onClick={() => {
          prevImage();
          document.activeElement.blur(); // Remove button focus after click
        }}
      >
        &#10094;
      </button>

      <img
        src={images[currentIndex]}
        alt={`carousel-${currentIndex + 1}`}
        className={`carousel__image ${isLoaded ? "loaded" : ""}`}
        loading="lazy"
      />

      <button
        className="carousel__button next"
        onClick={() => {
          nextImage();
          document.activeElement.blur(); // Remove button focus after click
        }}
      >
        &#10095;
      </button>
    </div>
  );
};

Carousel.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default Carousel;
