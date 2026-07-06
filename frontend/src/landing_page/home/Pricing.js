import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 my-5'>
            <div className='row'>
                <div className='col-5 my-5'>
                    <h2 className='mb-4 mt-5'>Unbeatable pricing</h2>
                    <p className='text-muted fs-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='text-decoration-none fs-5'>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-7 my-5 fs-6' >
                    <div className='row'>
                        <div className='col-4 '>
                        <img src='media/images/pricing0.svg'/>
                        <p className='mx-5'>Free account opening</p>
                    </div>
                    <div className='col-4'>
                        <img src='media/images/pricingEquity.svg'/>
                        <p className='mx-5'>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='col-4'>
                        <img src='media/images/intradayTrades.svg'/><p className='mx-5'>Intraday and
F&O</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;