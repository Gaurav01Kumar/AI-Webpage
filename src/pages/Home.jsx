import React from "react";
import Demo from "../components/Demo";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div
        className="relative z-10 flex 
  justify-center items-center
   flex-col max-w-7xl mx-auto
    sm:px-16 px-6"
      >
        <Hero
          heading="Summarize Articles with"
          brand="OpenAI GPT-4"
          summary=" Simplify your reading with Summize , and open-source article summarizer
      that transforms lengthy articles into clear and conscise summaries"
        />
        <Demo />
      </div>
    </main>
  );
};

export default Home;
