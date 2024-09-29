'use client'
import React, { useRef, useEffect } from 'react'

function Index() {
    const symbole = useRef();
    useEffect(
        () => {
          const script = document.createElement("script");
          script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
          script.type = "text/javascript";
          script.async = true;
          script.innerHTML = `
            {
              
  "symbols": [
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500 Index"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "US 100 Cash CFD"
    },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR to USD"
    },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "Ethereum"
    }
  ],
  "isTransparent": false,
  "showSymbolLogo": false,
  "colorTheme": "light",
  "locale": "en"
            }`;

          symbole.current.appendChild(script);
           
          return ()=> [script.remove()];
        },
        []
      );
  return (
    <div className='mt-8 max-w-3xl ml-24'>
        <div class="tradingview-widget-container" ref={symbole}>
        <div class="tradingview-widget-container__widget"></div>
        </div>
      
    </div>
  )
}

export default Index
