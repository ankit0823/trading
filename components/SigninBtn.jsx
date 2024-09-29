"use client";

import React from 'react'
import { signIn } from 'next-auth/react';

function SigninBtn() {
  return (
    <div className='max-w-3xl mx-auto'>
      <button
      onClick={() => signIn("google") } 
       className='grid place-items-center h-screen -mt-24'>
        <span className='border-none bg-blue-500 p-4 rounded-lg text-white shadow-md' >Singh In With Google</span>
        </button>
    </div>
  )
}

export default SigninBtn
