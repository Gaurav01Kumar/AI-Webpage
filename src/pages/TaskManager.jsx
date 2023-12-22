import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import { bgVideo } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Taskmanger.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Footer from "../components/Footer";
const TaskManager = () => {
  const [opened, setOpened] = useState(true);
  const [quotes, setQuotes] = useState("");
  const options = {
    method: "GET",
    url: import.meta.env.VITE_RAPID_MOTIVATIONAL_URL,
    params: {
      quotes: "random quotes",
    },
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_RAPID_MOTIVATIONAL_KEY}`,
      "X-RapidAPI-Host": `${import.meta.env.VITE_RAPID_MOTIVATIONAL_HOST}`,
    },
  };

  async function getSuccessQuotes() {
    try {
      const response = await axios.request(options);
      setQuotes(response.data.quote);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getSuccessQuotes();
  }, []);

  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div
        className="relative z-10 flex 
    justify-center items-center 
    flex-col max-w-7xl mx-auto sm:px-16 px-6"
      >
        <Hero
          heading="Don't wait another day. Your future self is waiting for you to take the first step.  "
          brand="Start your journey with Daily Tracker now!"
        />
        <h1 className=" motivation_quotes">{quotes}</h1>
      </div>
      <section className="relative my-3 border-b-2  challenge-list-section">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <h4 className="text-center text-3xl text-emerald-500">
            Ready to unleash your inner champion? Start with our prebuild task
            manager or challenges.
          </h4>
          <button
            type="submit"
            className="px-5 py-2 bg-orange-500 hover:scale-110  
             transition-all text-white text-xl shadow-slate-100 
             rounded-xl
             "
          >
            Start Journey
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-purple-500 hover:scale-110  
             transition-all text-white text-xl shadow-slate-100 
             rounded-xl
             "
            onClick={() => setOpened(!opened)}
          >
            Create your own Journey
          </button>
        </div>
        {/* Pre build goals  */}
        <NewCustomChallengeForm opened={opened} setOpened={setOpened} />

        <div
          className="  mt-10 text-center relative 
          p-9 h-full w-full overflow-hidden
        "
        >
          <video
            src={bgVideo}
            loop
            mutedy
            autoPlay
            className="overflow-x-hidden  -z-1 absolute top-10 left-0  "
          ></video>

          <div
            className="flex  justify-around  gap-5 overflow-hidden   max-sm:grid-cols-1
            relative mt-20 z-10 slider-wrapper
          "
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2000,
              }}
              enabled
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div
                  className="border w-full  shadow-lg
           transition-transform   p-4 backdrop-blur  text-whit hover:backdrop-blur-none  hover:bg-blend-darken "
                >
                  <div>
                    <h5
                      className="text-white text-xl px-3
                "
                    >
                      75 days <span>Hard</span> Challenges
                    </h5>
                    {/* <img
                  src="https://img.freepik.com/free-vector/friends-climb-mountain-hike-cartoon-man-holding-hand-woman-help-reaching-top-high-cliffs-hills-solidarity-support-cooperation-two-united-people-team-isolated-white_575670-852.jpg?size=626&ext=jpg&ga=GA1.1.1392342234.1702869595&semt=ais"
                  alt="a 75 hard challenge pic"
                /> */}
                    <p className="text-[13px] text-green-500 my-3">
                      A 75-day program called 75 Hard might help you become
                      mentally strong and disciplined and change your life from
                      the inside out.{" "}
                      <b>It requires you to follow some rules every day.</b>
                    </p>
                    <ul
                      className="text-left text-white list-disc px-10 text-[12px] w-full 
                
                
                "
                    >
                      <li>Take a picture of yourself daily</li>
                      <li>Drink 4 liters of water</li>
                      <li>Stick to any healthy diet.</li>
                      <li>Excersie 2x day for 30-45 each</li>
                      <li>
                        Read 10 minutes of any non fiction/self-help books.
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="p-1 px-4 mt-7 border text-black shadow-xl hover:bg-red-400 hover:text-black"
                    >
                      Start Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="border w-full  shadow-lg
           transition-transform   p-4 backdrop-blur  text-whit hover:backdrop-blur-none  hover:bg-blend-darken "
                >
                  <div>
                    <h5
                      className="text-white text-xl px-3
                "
                    >
                      78 days <span>Hard</span> Challenges
                    </h5>
                    {/* <img
                  src="https://img.freepik.com/free-vector/friends-climb-mountain-hike-cartoon-man-holding-hand-woman-help-reaching-top-high-cliffs-hills-solidarity-support-cooperation-two-united-people-team-isolated-white_575670-852.jpg?size=626&ext=jpg&ga=GA1.1.1392342234.1702869595&semt=ais"
                  alt="a 75 hard challenge pic"
                /> */}
                    <p className="text-[13px] text-green-500 my-3">
                      A 75-day program called 75 Hard might help you become
                      mentally strong and disciplined and change your life from
                      the inside out.{" "}
                      <b>It requires you to follow some rules every day.</b>
                    </p>
                    <ul
                      className="text-left text-white list-disc px-10 text-[12px] w-full 
                
                
                "
                    >
                      <li>Take a picture of yourself daily</li>
                      <li>Drink 4 liters of water</li>
                      <li>Stick to any healthy diet.</li>
                      <li>Excersie 2x day for 30-45 each</li>
                      <li>
                        Read 10 minutes of any non fiction/self-help books.
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="p-1 px-4 mt-7 border text-black shadow-xl hover:bg-red-400 hover:text-black"
                    >
                      Start Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="border w-full  shadow-lg
           transition-transform   p-4 backdrop-blur  text-whit hover:backdrop-blur-none  hover:bg-blend-darken "
                >
                  <div>
                    <h5
                      className="text-white text-xl px-3
                "
                    >
                      78 days <span>Hard</span> Challenges
                    </h5>
                    {/* <img
                  src="https://img.freepik.com/free-vector/friends-climb-mountain-hike-cartoon-man-holding-hand-woman-help-reaching-top-high-cliffs-hills-solidarity-support-cooperation-two-united-people-team-isolated-white_575670-852.jpg?size=626&ext=jpg&ga=GA1.1.1392342234.1702869595&semt=ais"
                  alt="a 75 hard challenge pic"
                /> */}
                    <p className="text-[13px] text-green-500 my-3">
                      A 75-day program called 75 Hard might help you become
                      mentally strong and disciplined and change your life from
                      the inside out.{" "}
                      <b>It requires you to follow some rules every day.</b>
                    </p>
                    <ul
                      className="text-left text-white list-disc px-10 text-[12px] w-full 
                
                
                "
                    >
                      <li>Take a picture of yourself daily</li>
                      <li>Drink 4 liters of water</li>
                      <li>Stick to any healthy diet.</li>
                      <li>Excersie 2x day for 30-45 each</li>
                      <li>
                        Read 10 minutes of any non fiction/self-help books.
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="p-1 px-4 mt-7 border text-black shadow-xl hover:bg-red-400 hover:text-black"
                    >
                      Start Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

// form component for add new custom input
import { motion, AnimatePresence } from "framer-motion";
import { FormControl,
   FormLabel ,
   FormErrorMessage,
   Input,
   FormHelperText
  } from "@chakra-ui/react";

  
const NewCustomChallengeForm = ({ opened, setOpened }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const [input,setInput]=useState('')
 const handleChangeInput=(e)=>setInput(e.target.value);
 const isError=input===''
  return (
    <>
      {opened ? (
        <motion.div
          variants={variants}
          className="shadow z-30 bg-white w-full
           text-black absolute top-10 p-10"
        >
          <div className="relative w-full text-black">
            <div
              className="text-orange-700 text-[45px] -top-8
                 absolute right-10 cursor-pointer hover:text-[50px]
                 "
              onClick={() => setOpened(!opened)}
            >
              <ion-icon name="close-outline"></ion-icon>
            </div>
            <h3 className="text-center text-xl">
              Create your Own Life Goals With Our Tech
            </h3>
          </div>
          <div
            className="   overflow-hidden
           flex flex-col z-10
          "
          >
           
             <FormControl isInvalid={isError}>
                  <FormLabel>Challenge Name</FormLabel>
                  <Input type="email" />
                  {
                    isError?
                    <FormHelperText>
                        Write your challenge name
                    </FormHelperText>
                    :<FormErrorMessage>Name is required</FormErrorMessage>
                  }
             </FormControl>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default TaskManager;
