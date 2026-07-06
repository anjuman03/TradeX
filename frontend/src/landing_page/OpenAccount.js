import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container text-center '>
            <div className='row my-5'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p className='fs-4 mb-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='btn btn-primary btn-lg col-3 m-auto fs-4 mb-5' onClick={() => window.location.href = '/signup'} >Sign up for free</button>
            </div>
        </div>
     );
}

export default OpenAccount;