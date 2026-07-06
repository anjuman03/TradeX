import React from 'react';

function Stats() {
    return ( 
    <div className='container my-5'> 
        <div className='row'>
            <div className='col-5'>
                <h2 className='mt-5 mb-5'>Trust with confidence</h2>
                <div className='row'>
                    <h3>Customer-first always</h3>
                    <p className='mt-2 fs-5 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                </div>
                <div className='row mt-4'>
                    <h3>No spam or gimmicks</h3>
                    <p className='mt-2 fs-5 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                </div>
                <div className='row mt-4 '>
                    <h3>The Zerodha universe</h3>
                    <p className='mt-2 fs-5 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                </div>
                <div className='row mt-4'>
                    <h3>Do better with money</h3>
                    <p className='mt-2 fs-5 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
            </div>
            <div className='col-7 mt-5'>
                <img src='media/images/ecosystem.png' className='img-fluid p-4'/>
                <div className='text-center fs-5' >
                    <a href='' className='mx-5 text-decoration-none'>Explore our products <i class="fa-solid fa-arrow-right-long"></i> </a>
                    <a href=''className='text-decoration-none'>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Stats;