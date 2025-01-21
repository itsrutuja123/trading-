import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5 mb-5"> {/*p-5=padding 5px*/}
            <div className="row text-center">
                <img src='media/images/homeHero.png' alt="Hero Image" className="mb-5"/> {/*mb=margin-bootom*/}
                <h1 className="mt-5">Invest in everything</h1>  {/*mt-5=margin-top*/}
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <a href="/signup"className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}>Signup for free</a>
            </div>
        </div>
    );
}

export default Hero;