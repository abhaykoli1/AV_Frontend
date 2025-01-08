import React from "react";
import Robo from "../../assets/home.avif";

const Hero = () => {
  return (
    <div
      id="Home"
      className="relative   text-white flex-col items-center text-center p-10"
    >
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="text-start z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Supercharge your <span className="text-purple-600">STARTUP</span>{" "}
            Adventure
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Let's Start & Grow Your Startup To The Next Level.
          </p>

          <a
            href="https://www.instagram.com/avbigbuddy"
            className=" bg-purple-600 w-60  text-white px-6 py-3 rounded-l-lg rounded-r-full text-lg shadow-lg hover:bg-purple-700"
          >
            View on Instagram
          </a>
        </div>

        <div className="mt-10 z-10 flex gap-8 items-center justify-center">
          <img
            src={Robo}
            alt="Startup concept"
            className="w-auto h-[40] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute z-0 left-0 top-14 bg-purple-400 rounded-full w-32 h-32"></div>
      <div className="absolute z-0 right-10 bottom-16 bg-yellow-400 rounded-full w-40 h-40"></div>
    </div>
  );
};

export default Hero;
