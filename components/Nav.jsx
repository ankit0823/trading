'use client'
import React, { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlWallet } from "react-icons/sl";
import { LiaShoppingCartSolid } from "react-icons/lia";
import ProfileModal from './ProfileModal';

const Nav = () => {
   

    
  return (
    <>
    <div className='flex gap-10 text-xl font-[700]'>
          <a className='text-[30px]' href=""><IoIosNotificationsOutline/></a>
          <a  className='text-lg cursor-pointer'><SlWallet/></a>
          <button className='text-2xl'><LiaShoppingCartSolid/></button>
          <div className='flex cursor-pointer font-[400]'>
            <a id='profile'></a><ProfileModal/></div>
        </div>

    </>
  )
}

export default Nav
