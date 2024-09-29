'use client';
import React, { useEffect, useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { useSession } from 'next-auth/react';
import Info from './info';
import axios from 'axios';

const RealTime = () => {
  const { data: session } = useSession();
  const [stocks, setStocks] = useState({
    nifty: { price: null, change: null },
    sensex: { price: null, change: null },
    bankNifty: { price: null, change: null },
  });

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        // Example API call, replace with your API endpoint and adjust params as necessary
        const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_KEY;
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NSE:NIFTY50&apikey=${apiKey}`
        );

        const niftyPrice = response.data['Global Quote']['05. price'];
        const niftyChange = response.data['Global Quote']['10. change percent'];

        setStocks((prev) => ({
          ...prev,
          nifty: { price: niftyPrice, change: niftyChange },
        }));

        // Repeat for SENSEX and BANKNIFTY with their specific symbols
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  if (!session) {
    return <div>Loading...</div>;
  }

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
            <div className="flex items-center gap-3 px-28 mt-8">
              <div className="relative w-72 h-10 rounded-md border border-zinc-200 text-zinc-600 px-8 py-10 overflow-hidden">
                <h1 className="absolute left-5 top-4 text-sm">NIFTY 50</h1>
                <p className="absolute left-5">{stocks.nifty.price || 'Fetching...'}</p>
              </div>
              <div className="relative w-72 h-10 rounded-md border border-zinc-200 text-zinc-600 px-8 py-10 overflow-hidden">
                <h1 className="absolute left-5 top-4 text-sm">SENSEX</h1>
                <p className="absolute left-5">80,519.34</p>
              </div>
              <div className="relative w-72 h-10 rounded-md border border-zinc-200 text-zinc-600 px-8 py-10 overflow-hidden">
                <h1 className="absolute left-5 top-4 text-sm">BANKNIFTY</h1>
                <p className="absolute left-5">52,278.90</p>
              </div>
            </div>
          </div>
          {/* Rest of your JSX remains unchanged */}
        </div>
      </div>
    </>
  );
};

export default RealTime;
