import React from 'react';

function Hero() {
    return ( 
        /*classname container fluid is used to occupy the entire screen for thst div*/
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h5 style={{fontWeight:"bold"}}>Support portal</h5>
                <a href="#" style={{fontWeight:"bold"}}>Track Tickets</a>
            </div>
            <div className="row p-4 mb-5">
                <div className="col-6 p-5">
                    <h1 className="fs-3">Search for an answer or browse help topics to <br/>create a ticket</h1>
                    <input placeholder="Eg. how do I activate F&O, why is my order getting rejected....."/>
                    <br/><br/>
                    <a href="#" style={{marginRight:"32px"}}>Track Account opening</a>
                    <a href="#" style={{marginRight:"32px"}}>Track segment activation</a>
                    <a href="#" style={{marginRight:"43px"}}>Intraday margins</a>
                    <br/>
                    <a href="#" style={{marginRight:"20px"}}>Grow user manual</a>
                </div>
                <div className="col-6 p-5 " style={{fontWeight:"bold"}}>
                    <h4>Featured</h4>
                    <a href="#">1.Current Takeovers and Delisting-January 2024</a>
                    <br/><br/>
                    <a href="#">2.Latest Intraday leverages- MIS &CO</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;