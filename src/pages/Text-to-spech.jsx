import React from "react";
import Hero from "../components/Hero";
import TextSpeech from "../components/TextSpeech";

const Texttospech = () => {
  return (
    <main>
      <div className="gradient" />
      <div
        className="relative z-10 flex 
     justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6"
      >
        <Hero
          heading="Convert Text with "
          brand="AI"
          summary="Simplify your reading with audio , and open source text to speach api 
       that transform large text into clear audio clip in muliple language"
        />
        <TextSpeech/>
      </div>
    </main>
  );
};

export default Texttospech;
