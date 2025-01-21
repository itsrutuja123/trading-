import React from 'react';

function Universe() {
    return (
        <div className="container">
            {/* Title Section */}
            <div className="row text-center mb-5">
                <div className="col-12 mt-5">
                    <h1>The Zerogro Universe</h1>
                    <p className="mt-4">Extend your trading and investment experience even further with our partner platforms</p>
                </div>
            </div>

            {/* First Row */}
            <div className="row text-center">
                <div className="col-4 p-3">
                    <img src="media/images/smallcaseLogo.png" alt="Thematic investment platform" />
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/streakLogo.png" alt="Algo & strategy platform" style={{ width: '100px', height: 'auto' }}/>
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/sensibullLogo.svg" alt="Options trading platform" />
                    <p className="text-small text-muted">Options trading platform</p>
                </div>
            </div>

            {/* Second Row */}
            <div className="row text-center">
                <div className="col-4 p-3">
                    <img src="media/images/zerodhaFundhouse.png" alt="Asset management" style={{ width: '100px', height: '40px' }}/>
                    <p className="text-small text-muted">Asset management</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/goldenpiLogo.png" alt="Bonds trading platform" />
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media/images/dittoLogo.png" alt="Insurance" style={{ width: '100px', height: 'auto' }}/>
                    <p className="text-small text-muted">Insurance</p>
                </div>
                <a href="/signup" className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}>Signup for free</a>
            </div>
        </div>
    );
}

export default Universe;
