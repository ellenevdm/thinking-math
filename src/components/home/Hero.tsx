"use client";

import { clear } from "console";
import { useEffect, useState } from "react";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpeg",
  "/images/hero6.jpg",
  "/images/hero7.jpg",
  "/images/hero8.jpg",
  "/images/hero9.jpg",
  "/images/hero10.jpg",
  "/images/hero11.png",
  "/images/hero12.jpg",
  "/images/hero13.jpg",
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen md:min-h-[75vh] overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              i === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
          Thinking Maths
        </h1>
        <p className="text-white text-center text-lg">
          {" "}
          Resources for Teachers to Help Children Love and Understand Maths
        </p>
      </div>
    </div>
  );
}

export default Hero;
