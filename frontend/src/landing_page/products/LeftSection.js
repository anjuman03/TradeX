import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    
    const handleRedirect = () => {
        const token = localStorage.getItem('token');
        if (token) {
            window.location.href = `http://localhost:3001?token=${token}`;
        } else {
            window.location.href = 'http://localhost:3001';
        }
    };

    return ( 
        <div className='container text-muted' style={{marginTop:"5rem", marginBottom:"5rem"}}>
            <div className='row'>
                <div className='col-7 text-center'>
                    <img src={imageURL} onClick={handleRedirect} style={{cursor:"pointer"}} />
                </div>
                <div className='col-4 m-5'>
                    <h2 className='mb-4'>{productName}</h2>
                    <p className='fs-5 mb-3'>{productDescription}</p>
                    <div className='row fs-5'>
                        <div className='col-6'>
                            <a onClick={handleRedirect} className='text-decoration-none' style={{cursor:"pointer"}}>Try demo <i className="fa-solid fa-arrow-right-long"></i></a>
                            <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' className='mt-4' style={{width:"170px"}}/></a>
                        </div>
                        <div className='col-6'>
                            <a href='' className='text-decoration-none'>Learn more <i className="fa-solid fa-arrow-right-long"></i></a>
                            <a href={appStore}><img src='media/images/appstoreBadge.svg' className='mt-4' style={{width:"150px"}}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;