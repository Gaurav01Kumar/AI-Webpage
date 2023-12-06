import React, { useEffect, useState } from 'react'

import { loader } from '../assets/assets';
import { motion } from "framer-motion"
const rapidKey=import.meta.env.VITE_RAPID_SPEECH_KEY;
const rapidUrl=import.meta.env.VITE_RAPID_SPEECH_URL;
const rapidSpeechHost=import.meta.env.VITE_RAPID_SPEECH_HOST
import axios from "axios"
import  languageArray  from '../data/langData';
const TextSpeech = () => {
  const [audioData,setData]=useState({
    lang:'',
    text:''
  });
  const [audioFile,setAudioFile]=useState('');
  const [isLoading,setIsLoading]=useState(false)
  
 //const [getAudio,{error,isFetching}]=useLazyGetAudioQuery();
 const handleSubmit = async (e) => {
  setIsLoading(true);
  e.preventDefault();
  const options = {
    method: 'GET',
    url: rapidUrl,
    params: {
      text: `${audioData.text}`,
      lang: `${audioData.lang}`
    },
    headers: {
      'X-RapidAPI-Key': rapidKey,
      'X-RapidAPI-Host':rapidSpeechHost
    },
    responseType: 'arraybuffer', // Specify the responseType as arraybuffer
  };

  try {
    const response = await axios.request(options);
    const blob = new Blob([response.data], { type: 'audio/mpeg' });
    const url = URL.createObjectURL(blob);
    setAudioFile(url);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
  }
};

 
  return (
    <motion.section className='mt-16 w-full max-w-xl'
    
    initial={{y:200,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{delay:2,y:{duration:2},ease:"easeIn"}}
    >
        <div
        className='flex flex-col w-full gap-2'
        >
        <form className='relative flex justify-center items-center flex-col'
        onSubmit={handleSubmit}
        >
            <textarea rows="7" cols="70"
            value={audioData.text}
            onChange={(e)=>setData({text:e.target.value})}
            required
            className='block w-full rounded-md border border-gray-200
             bg-white py-2 pl-10 pr-12 text-sm shadow-lg 
             font-satoshi font-medium focus:border-black
             focus:outline-none focus:ring-0 peer'
            ></textarea>
            <div className='flex'>
            <select 
            className="block w-45 overflow-visible px-2 py-1 mt-2 text-base
             border rounded-lg focus:ring focus:ring-opacity-50"
             onChange={(e)=>setData({lang:e.target.value})}
             >
            <option value="#">Select Language</option>
            { languageArray &&
              languageArray.map((lang)=>{
                return(
                  
                <option  value={lang.code}>{lang.name}</option>
                
                )
              })
            }
          </select>
          <button type='submit'
          className='hover:border-gray-700
          hover:text-gray-700 
          inset-y-0 right-9 my-1.5 mr-1.5
          flex w-100 h-10 mt-2 items-center justify-center
          rounded border text-gray-400
          peer-focus:border-gray-700
          peer-foucs:text-gray-700 p-2
          '
          >Convert To Audio</button>
            </div>
            
        </form>
        <div className='my-10 max-w-full flex justify-center items-center'>
        {
        isLoading?(
          <img src={loader} className="w-20 h-20 object-contain"/>
        ):(
         <audio controls>
         <source src={audioFile} type="audio/mpeg" /> 
         </audio>
        )
        }
        </div>
        </div>
    </motion.section>
  )
}

export default TextSpeech