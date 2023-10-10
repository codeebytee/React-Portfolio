import React, { useEffect } from 'react';
import  { useState } from "react";;

const TradingViewWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                {
                    "proName": "FOREXCOM:SPXUSD",
                    "title": "S&P 500"
                },
                {
                    "proName": "FOREXCOM:NSXUSD",
                    "title": "US 100"
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
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": true,
            "displayMode": "adaptive",
            "locale": "in"
        });

        document.querySelector('.tradingview-widget-container__widget').appendChild(script);

        return () => {
            document.querySelector('.tradingview-widget-container__widget').removeChild(script);
        }
    }, []);

    return (
        <div 
             fixed="bottom"
             expand="md" 
             className="tradingview-widget-container"
              >

            <div fixed="bottom"
             expand="md"  className="tradingview-widget-container__widget"></div>
            <div fixed="bottom"
             expand="md"  className="tradingview-widget-copyright">
                <a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank">
                    <span className="blue-text"></span>
                </a>
            </div>
        </div>
    );
}

export default TradingViewWidget;
