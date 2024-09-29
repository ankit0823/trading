'use client';
import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { useSession } from 'next-auth/react'; // Ensure the hook is imported correctly
import Info from './info';
import Index from '.';

const Stock = () => {
//   const { data: session } = useSession(); // Hook should be called at the top level of the component

  // If the session is not ready or you have loading states, handle them correctly
  
  return (
    <>
      <div className="flex justify-around w-screen h-screen">
        <div className="w-[70%] px-14">
          <div>
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xl px-[12%] mt-8 font-[550] text-zinc-600">Index</h3>
              <a href="" className="text-sm px-[12%] -mb-20 font-[550] text-emerald-400">
                All indices
              </a>
            </div>
           <Index/>
          </div>
          <div className="px-[11%] py-10">
            <h2 className="text-lg font-[550] text-zinc-700">Most Bought on Groww</h2>
            <div className="flex items-center gap-6 py-5">
              <div className="relative w-48 h-48 rounded-md border border-zinc-200 text-zinc-600 px-8 py-10 overflow-hidden">
                <div className="absolute top-3 left-5 w-12 h-12 border-zinc-400 rounded-md overflow-hidden">
                  <img src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK500870.png" alt="Castrol India" />
                </div>
                <h1 className="absolute left-5 top-16 text-sm">Castrol India</h1>
                <span className="absolute bottom-8 left-4 text-xl">
                  <LiaRupeeSignSolid />
                </span>
                <h1 className="absolute left-8 bottom-7 text-lg">267.32</h1>
                <p className="absolute left-5 bottom-1 text-emerald-400">0.57</p>
              </div>

              <div className="relative w-48 h-48 rounded-md border border-zinc-200 text-zinc-600 px-8 py-10 overflow-hidden">
                <div className="absolute top-3 left-5 w-12 h-12 border-zinc-400 rounded-md overflow-hidden">
                  <img src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK543257.png" alt="IRFC" />
                </div>
                <h1 className="absolute left-5 top-16 text-sm">IRFC</h1>
                <span className="absolute bottom-8 left-4 text-xl">
                  <LiaRupeeSignSolid />
                </span>
                <h1 className="absolute left-8 bottom-7 text-lg">218.45</h1>
                <p className="absolute left-5 bottom-1 text-emerald-400"></p>
              </div>

              <div className="relative w-48 h-48 rounded-md border border-zinc-200 text-zinc-600 px-8 py-10 overflow-hidden">
                <div className="absolute top-3 left-5 w-12 h-12 border-zinc-400 rounded-md overflow-hidden">
                  <img src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK542649.png" alt="Rail Vikas Nigma" />
                </div>
                <h1 className="absolute left-5 top-16 text-sm">Rail Vikas Nigma</h1>
                <span className="absolute bottom-8 left-4 text-xl">
                  <LiaRupeeSignSolid />
                </span>
                <h1 className="absolute left-8 bottom-7 text-lg">625.56</h1>
                <p className="absolute left-5 bottom-1 text-emerald-400">0.57</p>
              </div>

              <div className="relative w-48 h-48 rounded-md border border-zinc-200 text-zinc-600 px-8 py-10 overflow-hidden">
                <div className="absolute top-3 left-5 w-12 h-12 border-zinc-400 rounded-md overflow-hidden">
                  <img src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK532648.png" alt="Yes Bank" />
                </div>
                <h1 className="absolute left-5 top-16 text-sm">Yes Bank</h1>
                <span className="absolute bottom-8 left-4 text-xl">
                  <LiaRupeeSignSolid />
                </span>
                <h1 className="absolute left-8 bottom-7 text-lg">26.25</h1>
                <p className="absolute left-5 bottom-1 text-emerald-400">0.57</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 py-9">
          <div className="flex justify-around gap-32">
            <h1 className="text-xl font-[500] text-slate-700">Your Investment</h1>
            <a id="dash" className="text-sm font-semibold text-emerald-400" href="">
              Dashboard
            </a>
          </div>
          <div>
            <div className="relative w-70 h-10 rounded-md border border-zinc-200 px-8 py-10 overflow-hidden">
              <div>
                <span className="absolute left-3 top-5">
                  <LiaRupeeSignSolid size="1.3em" />
                </span>
                <h1 className="absolute left-8 top-4 text-xl">0</h1>
                <p className="absolute left-5 text-xs font-[520] text-zinc-500 mt-1">Total Returns</p>
              </div>
              <div>
                <span className="absolute right-7 top-5">
                  <LiaRupeeSignSolid size="1.3em" />
                </span>
                <h1 className="absolute right-5 top-4 text-xl">0</h1>
                <p className="absolute right-5 text-xs font-[540] text-zinc-500 mt-1">Current Value</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-around gap-32 mt-28">
              <h1 className="text-xl font-[520] text-slate-700">All watchlists</h1>
              <a id="dash" className="text-sm font-semibold text-emerald-400" href="">
                View all
              </a>
            </div>
            <div>
              <div className="relative w-70 h-20 rounded-md border border-zinc-200 px-8 py-20 mt-5">
                <div className="w-full border-b-2">
                  <h1 className="absolute left-5 top-4 text-lg"><Info/></h1>
                  <p className="absolute left-5 top-12 text-sm font-[520] text-zinc-500">30 items</p>
                </div>
                <div className="relative">
                  <span className="absolute top-5 text-emerald-400">
                    <IoMdAddCircleOutline size="1.8em" />
                  </span>
                  <h3 className="absolute left-10 top-5 font-[550] text-emerald-400 text-lg">Create new watchlist</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stock;
