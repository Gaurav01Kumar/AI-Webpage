import React, { useState } from "react";

const CategoryList = ({ urlText, setUrlText }) => {
  return (
    <div
      className="mt-16 px-2 w-full flex items-center
     justify-center gap-10"
    >
      <div
        className="p-3 border-4 shadow hover:bg-blue-300 hover:text-white 
        transition-all cursor-pointer rounded-lg w-60"
        onClick={() => setUrlText("chemical-elements-en.json")}
      >
        <h5 className="font-satoshi uppercase text-inline ">
          chemical-elements
        </h5>
      </div>
      <div
        className="p-3 border-4 shadow hover:bg-blue-300 hover:text-white 
        transition-all cursor-pointer rounded-lg w-100"
        onClick={()=>setUrlText("countries-en.json")}
      >
        <p className="font-santoshi uppercase  " style={{ fontSize: "13px" }}>
          Capitals, currencies, flags and more.
        </p>
      </div>
      <div
        className="p-3 border-4 shadow hover:bg-blue-300 hover:text-white 
        transition-all cursor-pointer rounded-lg"
        onClick={() => setUrlText("sustainable-development-goals-en.json")}
      >
        <h5 className="font-satoshi uppercase "> sustainable development.</h5>
      </div>
      <div
        className="p-3 border-4 shadow hover:bg-blue-300 hover:text-white 
        transition-all cursor-pointer rounded-lg"
        onClick={() => setUrlText("plants-de.json")}
      >
        <h5 className="font-satoshi uppercase ">Planet</h5>
      </div>
    </div>
  );
};

export default CategoryList;
