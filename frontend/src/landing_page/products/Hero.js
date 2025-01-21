import React from 'react';

function Hero() {
    return ( 
        <div className="conatainer border-bottom mb-5">
            <div className="text-center mt-5">
                <h1>Technology</h1>
                <h3 className="text-muted mt-3 fs-4">Sleek, modern, easy and intuitive trading platforms</h3>
                <p className="mt-3 mb-5">Check out our <a href="#" style={{textDecoration:"none"}}>investments offerings </a><i class="fa fa-long-arrow-right" aria-hidden="true" style={{color:"blue"}}></i></p>
            </div>
            
        </div>
    );
}

export default Hero;