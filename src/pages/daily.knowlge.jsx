import React, { useState } from 'react'

import Hero from "../components/Hero"
import CategoryList from '../components/CategoryList'
import Knowlege from '../components/Knowlege'


const DailyKnowlge = () => {
    const [category,setCategory]=useState("")
    const [urlText,setUrlText]=useState("");
  
  return (
    <main>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <div className='relative z-10 flex 
        justify-center items-center 
        flex-col max-w-7xl mx-auto sm:px-16 px-6'
        
        >
          <Hero
           heading="Get Daily Knowlege About "
           brand="The UN global goals for sustainable development."
           summary="Getting a daily information of knowledge for specific Topic. This information change every 24 hour"
          />
          <section className='mt-5'>
            <CategoryList
             urlText={urlText}
             setUrlText={setUrlText}
            />
          </section>
          <section className='mt-5'>
            <Knowlege
            urlText={urlText}
            />
          </section>
        </div>
    </main>
  )
}

export default DailyKnowlge