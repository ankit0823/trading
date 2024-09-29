"use client"

import React, { useState } from 'react'

import Modal from './Modal'

function LandingPage() {
    
    const [showModal, setshowModal] = useState(false)

  return (
    <>
    <div className='flex items-center justify-around'>
    <div className='flex items-center gap-2'>
            <img className='w-12 h-12' src="https://play-lh.googleusercontent.com/LHjOai6kf1IsstKNWO9jbMxD-ix_FVYaJSLodKCqYQdoFVzQBuV9z5txxzcTagQcyX8" alt="" />
            <p className='text-3xl font-[600] text-zinc-800' href="/Logo">Groww</p>
          </div>
          <input type="text" className='text-sm border border-zinc-400 px-28 py-2 m-5  rounded' placeholder='What are you looking for?' autoComplete='off'></input>
          <button onClick={()=> setshowModal(true)} className='p-3 border border-none text-white text-center text-sm font-semibold bg-emerald-500 rounded-lg'>Login/Resgister</button>
    </div> 
    {showModal &&<Modal a={()=>setshowModal(false)}/>}

    <h1 id='home_heading' className='text-center text-zinc-700 font-sans'>
        <span>All things finance,
            <br />
            right here.
        </span>
        </h1>

    <h2 className='text-zinc-500 font-semibold mt-[20px] text-center text-[30px]'>Built for growwing India</h2>
    <button onClick={()=> setshowModal(true) } className='ml-[45%] py-4 px-7 mt-8 border border-none text-white text-center text-sm font-semibold bg-emerald-500 rounded-lg'><span>Get Started</span></button>

    <div className='flex items-center justify-center'>
        <img className='w-[1101px] object-cover' src="./groww.png"/>
    </div>

    </>
  )
}

export default LandingPage
