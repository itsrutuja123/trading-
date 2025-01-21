import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            {/* Title Section */}
            <div className="row  text-center mb-5 mt-5">
                <h1 className='fs-3'>Pricing</h1>
                <h3 className="text-muted fs-5 mt-4 mb-5">Free equity investments and flat ₹20 intraday and f&O trades</h3>
            </div>
            
            {/* Pricing Images and Text */}
            <div className="row text-center mt-5 ">
                <div className="col-4 p-4">
                    <img src="media/images/pricing0.svg" alt="Free equity delivery" style={{width:"90%"}}/>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className="text-muted">All equity investments (NSE,BSE), are absolutely free--₹ 0 brokerage. </p>
                </div>
                <div className="col-4 text-center p-4">
                    <img src="media/images/intradayTrades.svg" alt="Intraday and F&O trades" style={{width:"90%"}}/>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className="text-muted">Flat Rs.20 or 0.05% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades</p>
                </div>
                <div className="col-4 text-center p-4">
                    <img src="media/images/pricingMF.svg" alt="Free direct MF" style={{width:"90%"}}/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p classname="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
