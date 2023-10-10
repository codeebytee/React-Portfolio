// CandlePreloader.js
import React from 'react';
import './CandlePreloader.css';

const CandlePreloader = () => {
    return (
        <div className="candle-preloader">
        <div className="preloader-container">
            <svg width="250" height="150" xmlns="http://www.w3.org/2000/svg">
                {/* Candle 1 */}
                <line x1="15" y1="15" x2="15" y2="85" className="wick" />
                <rect x="10" y="25" width="10" height="60" className="candle1 green" />

                {/* Candle 2 */}
                <line x1="40" y1="10" x2="40" y2="90" className="wick" />
                <rect x="35" y="30" width="10" height="55" className="candle2 red" />

                {/* Candle 3 */}
                <line x1="65" y1="20" x2="65" y2="80" className="wick" />
                <rect x="60" y="35" width="10" height="50" className="candle3 green" />

                {/* Candle 4 */}
                <line x1="90" y1="15" x2="90" y2="85" className="wick" />
                <rect x="85" y="25" width="10" height="60" className="candle4 red" />

                {/* Candle 5 */}
                <line x1="115" y1="10" x2="115" y2="80" className="wick" />
                <rect x="110" y="20" width="10" height="65" className="candle5 green" />
            </svg>
        </div>
        </div>
    );
}

export default CandlePreloader;
