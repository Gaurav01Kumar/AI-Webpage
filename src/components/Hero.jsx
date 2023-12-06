import React from "react";
//import Navbar from "./Navbar";
import { motion } from "framer-motion";
const container = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.9,
    },
  },
};
const item = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },

};
const Hero = ({ heading, brand, summary }) => {
  return (
    <motion.header
      className="w-full felx justify-center
     items-center flex-col"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
      
        variants={item}
        transition={{delay:1,x:{duration:1.5}, ease:"easeOut"}}
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
      </motion.h1>
      <motion.h2
       initial={{x:-100,opacity:0}}
       animate={{x:0,opacity:1}}
       transition={{delay:1.5,y:{duration:1.5}, ease:"easeOut"}}
        className="mt-5 text-lg
       text-gray-600 sm:text-xl 
       text-center max-w-2xl"
      >
        {summary}
      </motion.h2>
    </motion.header>
  );
};

export default Hero;
