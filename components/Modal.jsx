"use client"

import React, { useRef } from 'react'
import { signIn } from 'next-auth/react';

function Modal({a}) {
  
  const refModal = useRef();

  const abs = (e)=> {
    if(refModal.current === e.target){
      a();
    }

  }

  return (
    <div ref={refModal} onClick={abs} className='fixed inset-0 bg-zinc-500 bg-opacity-30 backdrop-blur-sm flex items-center justify-center' >
      <div className="login-container relative bg-white">
      <div className="login-left">
        <h2>Simple, Free <br /> Investing.</h2>
        <p className='mt-56'>ETFs</p>
      </div>
      <button onClick={a} className='absolute right-2 font-bold text-lg text-zinc-600'>X</button>

     
      <div className="login-right">
        <h2 className='text-zinc-600'>Welcome to Groww</h2>
        <button onClick={()=> signIn("google")} className="text-zinc-500 google-button py-3 px-2 ml-5 border border-zinc-400 rounded-md">
          <img className='' src="https://e7.pngegg.com/pngimages/299/774/png-clipart-google-logo-google-search-search-engine-optimization-google-s-google-google-logo-google-thumbnail.png" alt="Google Logo" />
          Continue with Google
        </button>
        <div className="separator">
          {/* <span>Or</span> */}
        </div>
        {/* <input type="email" placeholder="Your Email Address" maxLength={250} className="email-input" />
        <button className="continue-button border-zinc-400 px-2 py-3 bg-emerald-400 rounded-md text-white ">Continue</button> */}
        <p className="terms-text">
          By proceeding, I agree to <a href="#">T&C</a>, <a href="#">Privacy Policy</a> & <a href="#">Tariff Rates</a>
        </p>
      </div>
     

    </div>
    
    </div>
  )
}

export default Modal
