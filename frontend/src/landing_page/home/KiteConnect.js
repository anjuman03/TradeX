import React from 'react';

function KiteConnect() {
    return ( 
        <div className='bg-opacity-0 ' style={{backgroundColor:"#e3f2fd"}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 py-4 img-fluid'>
                        <img src='media/images/kc-logo-landing.svg' alt='landing-img' onClick={() => window.location.href = "https://main.d2vbgqlewv0j8c.amplifyapp.com"}/>
                    </div>
                    <div className='col-6 text-muted pt-3'>
                        Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. Explore 
                    </div>
                    <div className='col-3 py-4 img-fluid'>
                        <img src='media/images/kc-banner-image.svg'alt='landing-image'/>
                    </div>
                    </div>
            </div>
        </div>
     );
}

export default KiteConnect;