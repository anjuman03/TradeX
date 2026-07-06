import React from 'react';
import {Link} from 'react-router-dom'

function NotFound() {
    return ( 
        <div className='container text-center '>
            <div className='row my-5'>
                <h1 className='mt-5'>404 Page Not Found</h1>
                <p className='fs-4 mb-5'>Sorry, the page you are looking for does not exist.</p>
                <Link to='/'><button className='btn btn-primary btn-lg col-3 m-auto fs-4 mb-5' >Go to Home</button></Link>
            </div>
        </div>
     );
}

export default NotFound;