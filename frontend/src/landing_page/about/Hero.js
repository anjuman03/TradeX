import React from 'react';

function Hero() {
    return ( 
        <div>
            <div className='container border-bottom'>
                <div className='container text-muted ' style={{width:"800px",marginTop:"7rem",marginBottom:"8rem"}}>
                    <div className='row text-center' >
                        <h2>We pioneered the discount broking model in India.
                        Now, we are breaking ground with our technology.</h2>
                    </div>
                </div>
            </div> 
            <div className='container' style={{width:"890px",marginTop:"7rem",marginBottom:"6rem"}}>
                <div className='row fs-6 p-2 text-muted'>
                    <div className='col-6'>
                        <p>
                            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                        </p>
                        <p>
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        </p>
                        <p>
                            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.


                        </p>
                    </div>
                    <div className='col-6'>
                        <p>
                            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                        </p>
                        <p>
                            Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                        </p>
                        <p>
                            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                        </p>
                    </div>
                </div>
                
            </div> 
        </div>

     );
}

export default Hero;
