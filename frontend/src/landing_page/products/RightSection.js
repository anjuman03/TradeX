import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
        <div>
            <div className='container text-muted' style={{marginTop:"",marginBottom:"5rem"} }>
            <div className='row '>
                <div className='col-4 mx-5' style={{marginTop:"13rem"}}>
                    <h2 className='mb-4'>{productName}</h2>
                    <p className='fs-5 mb-3'>{productDescription}</p>
                    <div className='row fs-5'>
                        <div className='col-6'>
                            <a href={learnMore} className='text-decoration-none'>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>
                <div className='col-7 text-center '>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
        </div>
     );
}

export default RightSection;