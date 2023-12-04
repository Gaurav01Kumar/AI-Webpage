import React from "react";
//import Navbar from "./Navbar";

const Hero = ({ heading, brand, summary }) => {
  return (
    <header
      className="w-full felx justify-center
     items-center flex-col"
    >
      <h1
        className="mt-5 text-5xl
      font-extrabold leading-[1.15]
       text-black sm:text-6xl text-center;"
      >
        {heading} <br className="max md:hidden" />
        <span
          className="bg-gradient-to-r from-amber-500
         via-orange-600 to-yellow-500 
         bg-clip-text text-transparent"
        >
          {brand}
        </span>
      </h1>
      <h2
        className="mt-5 text-lg
       text-gray-600 sm:text-xl 
       text-center max-w-2xl"
      >
  {
    summary
  }
      </h2>
    </header>
  );
};

export default Hero;
