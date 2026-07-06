import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='fs-4 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary btn-lg col-3 m-auto fs-4 mb-5' onClick={() => window.location.href = '/signup'} >Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;