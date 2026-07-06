import React from 'react';

function Education() {
    return ( 
            <div className='container my-5'>
                <div className='row '>
                        <div className='col-6 '>
                            <img src='media/images/education.svg'/>
                        </div>
                        <div className='col-6 mt-2 mb-5'>
                            <h2 className='mb-4 mt-5'>Free and open market education</h2>
                            <p className='text-muted fs-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <a href='' className='text-decoration-none fs-5'>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                            <h2 className='mb-4 mt-5'>Unbeatable pricing</h2>
                            <p className='text-muted fs-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                            <a href='' className='text-decoration-none fs-5'>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
            </div>
    );
}

export default Education;