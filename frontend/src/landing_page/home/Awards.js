import React from 'react';

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                {/* Image Column */}
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="svg image" className="img-fluid" />
                </div>
                {/* Text and List Column */}
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">
                        2+ million Zerogro clients contribute to over 20% of all retail order volumes in India daily by
                        trading and investing in:
                    </p>
                    {/* Two-column list */}
                    <div className="row">
                        <div className="col-6 mb-2">
                            <ul className="list-unstyled">
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6 mb-2">
                            <ul className="list-unstyled">
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    {/* Press Logos */}
                    <img 
                        src="media/images/pressLogos.png" 
                        alt="Press logo" 
                        style={{ width: "90%" }} 
                        className="mt-2 p-3 img-fluid" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Awards;
