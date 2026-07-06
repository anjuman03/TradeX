import React from 'react';

function Hero() {
    return ( 
        <div>
            <div className='container border-bottom'>
                <div className='container text-muted ' style={{width:"800px",marginTop:"8rem",marginBottom:"8rem"}}>
                    <div className='row text-center' >
                        <h2>TradeX Products</h2>
                        <p className='mb-3 fs-4'>Sleek, modern, and intuitive trading platforms</p>
                        <p className='fs-5'>Check out our <a href='' className='text-decoration-none'>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;
