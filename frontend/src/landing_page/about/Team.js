import React from 'react';

function Team() {
    return ( 
        <div>
            <div className='container text-muted' style={{marginBottom:"7rem",width:"900px"}}>
                <h2 className='mb-5 text-center'>People</h2>
                <div className='row'>
                    <div className='col-5 text-center'> 
                        <img src='media/images/anjuman.jpeg ' className='mb-4' style={{height:"295px",borderRadius:"100%",maxWidth:"100%",overflowClipMargin:"content-box"}}/>
                        <h3 className='mb-4'>Patan Anjuman</h3>
                        <h6>Full Stack Developer</h6>
                    </div>
                    <div className='col-7 px-5 fs-5'style={{marginTop:"3rem"}} >
                        <p>
                            Hi, I'm Anjuman, a passionate web developer who built TradeX as a personal project to learn full-stack development.
                        </p>
                        <p>
                            This is a stock trading platform built using React and Node.js.
I enjoy building real-world projects to sharpen my skills in modern web technologies.
Open to work and collaboration!
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Team;