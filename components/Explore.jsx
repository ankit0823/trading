"use client"
import React, { useState } from 'react'
import MutualFunds from './MutualFunds'
import Stock from './Stock'

const Fixed = () => {
    const [funds, setfund] = useState(Stock)
    
    function change(){
        setfund(MutualFunds)
    }
    function changees(){
        setfund(Stock)
    }
  return (
    <>
    <div className='flex items-center gap-10 px-[10%] mt-8 text-lg border-b-2 text-zinc-500'>
    <div className='w-full flex text-zinc-500 '>
        <div className='flex ml-[2%] items-center justify-around gap-14 cursor-pointer'>
        <h2 onClick={changees}>Stocks</h2>
        <h3 onClick={change}>Mutual Funds</h3>
        </div>
        </div>
    </div>
    {funds}
    </>
  )
}

export default Fixed
