'use client';

import React from 'react';
import { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlWallet } from "react-icons/sl";
import { LiaShoppingCartSolid } from "react-icons/lia";
import ProfileModal from './ProfileModal';
import Link from 'next/link';


function NavBar() {
  return (
    <>
    <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <div className='flex items-center justify-between'>
              <div className='flex items-center justify-around gap-14'>
                <div className='flex items-center gap-2'>
                  <img className='w-12 h-12' src="https://play-lh.googleusercontent.com/LHjOai6kf1IsstKNWO9jbMxD-ix_FVYaJSLodKCqYQdoFVzQBuV9z5txxzcTagQcyX8" alt="" />
                  <p className='text-3xl font-[600] text-zinc-800' href="/Logo">Groww</p>
                </div>
              <h1 className='text-zinc-700' href="/Explore">Explore</h1>
              <h1 className='text-zinc-700' href="/Investment">Investments</h1>
              <input type="text" className='text-sm border border-zinc-400 px-28 py-2 m-5  rounded' placeholder='What are you looking for?' ></input>
              </div>
              
              {/* <span className='ml-12'></span> */}
              <div className='flex gap-10 text-xl font-[700]'>
          <a className='text-[30px]' href=""><IoIosNotificationsOutline/></a>
          <Link href={"/wallet"} ><SlWallet/></Link>
          <button  className='text-2xl'><LiaShoppingCartSolid/></button>
          <div className='flex cursor-pointer font-[400]'>
            <a id='profile'></a><ProfileModal/></div>
        </div>
          </div>
       
    </div>
    </>
  )
}

export default NavBar
