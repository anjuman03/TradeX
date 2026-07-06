import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center text-muted'>
            <div className='row' style={{marginTop:"6rem",marginBottom:""}}>
                <h2>Charges</h2>
                <p className='fs-5'>List of all charges and taxes</p>
            </div>
            <div className='row' style={{margin:"7rem 4rem 6rem 4rem"}}>
                <div className='col-4'>
                     <img src='media/images/pricingEquity.svg'  style={{padding:"0 5rem 0 5rem"}}/>
                     <h2>Free equity delivery</h2>
                     <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                     <img src='media/images/intradayTrades.svg' style={{padding:"0 5rem 0 5rem"}}/>
                     <h2>Intraday and F&O trades</h2>
                     <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                     <img src='media/images/pricingMF.svg' style={{padding:"0 5rem 0 5rem"}}/>
                     <h2>Free direct MF</h2>
                     <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;
