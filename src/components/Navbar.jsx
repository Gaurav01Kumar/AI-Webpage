import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/assets";
const Navbar = () => {
  return (
    <div className="w-full">
      <nav
        className="flex justify-between
  items-center w-full mb-10 pt-2"
      >
        <img src={logo} alt="sumZ_logo" className="w-28 object-contain" />
        <div
          className=" flex  jusitify-between items-center
        "
        >
          <ul
            className=" flex justify-around
          items-center
          "
          >
            <li className="mx-4 font-satoshi hover:text-orange-400">
              <a href="/">Url summary</a>
            </li>
            <li className="mx-4 font-satoshi hover:text-orange-300">
              <a href="/text-to-speech">Text-to-speech</a>
            </li>
            <li className="mx-4 font-satoshi hover:text-orange-300">
              <a href="/daily-knowlege">Daily Knowlege</a>
            </li>
            <li className="mx-4 font-satoshi hover:text-orange-300">
              <a href="/chat">chat with Ai</a>
            </li>
          </ul>

          <button
            className=" btns" 
            type="button"
            
          >
           
           
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>Sign up</p>
          </button>
          
          <button
            className=" btns" 
            type="button"
            
          >
           
           
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>Sign In</p>
          </button>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
