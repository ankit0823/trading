'use client'
import { useSession, signOut } from 'next-auth/react';
import React, { useState } from 'react'
import Model from 'react-modal'
import { FaAngleRight } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";


const ProfileModal = () => {
    const {data: session} = useSession();
    const[visible, setvisible] = useState()

    return (
    <div className=''>
        <button onClick={()=> setvisible(true)}> {session?.user?.image && (
                    <img src={session.user.image} alt="User Avatar" className="rounded-full w-8 h-8" />
                )} </button>
        <Model isOpen={visible} onRequestClose={() => setvisible(false) } style={{
            overlay:{
            

            },
            content:{
                top:"85px",
                left:"67%",
                width:"360px",
                height:"400px",
                borderRadius:"10px",
                

            }
        }}>
            <div className=''>
            <div className='w-full flex items-center'>
               <div><a className='text-lg' href=''>{session.user.name} </a>
                <p className='text-zinc-500'>{session.user.email} </p>               
               </div>
               <a href="" className='-mt-4 ml-16 p-2 font-bold rounded-[50%] bg-zinc-100 border border-zinc-400'><IoSettingsOutline /></a>
            </div>
            <div className='cursor-pointer text-sm mt-5 text-zinc-500 font-semibold '>
                <div className='flex items-center mt-4 py-3 w-full'>
                    <h2 className=''href="">All Orders</h2>
                    <p className='ml-[200px] rounded-[50%] p-2'><FaAngleRight /></p>
                </div>
                <div className='flex items-center mt-4 py-3 w-full'>
                    <h2 className=''href="">Bank Details</h2>
                    <p className='ml-[190px]'><FaAngleRight /></p>
                </div>
                <div className='flex items-center mt-4 py-3 w-full'>
                    <h2 className=''href="">25x7 Customer Support</h2>
                    <p className='ml-[110px]'><FaAngleRight /></p>
                </div>
                <div className='flex items-center mt-4 py-3 w-full'>
                    <h2 className=''href="">Reports</h2>
                    <p className='ml-[210px] rounded-[50%] p-2'><FaAngleRight /></p>
                </div>
            </div>
            <div className='py-2 flex items-center gap-52'>
                <a href="" className='text-2xl ml-2 font-[600]'><BsBrightnessHigh /></a>
                <button onClick={()=> signOut()} className='btn_logout' >Log out</button>
            </div>
            </div>
                           
        </Model>
    </div>
    
  ) 
}

export default ProfileModal