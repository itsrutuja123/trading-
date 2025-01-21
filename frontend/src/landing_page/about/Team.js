import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-3 text-center border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>

      {/* Team Member Section */}
      <div className="row">
        {/* Image and Name Section */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img className="ml-5"
            src="media/images/Founder.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "50%",height:"65%"}}
          />
          <h4 className="mt-4">Mr.John </h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        {/* Description Section */}
        <div className="col-12 col-md-6 p-3 mt-3" style={{fontSize:"1.1em"}}>
          <p>
            Mr.John bootstrapped and founded Zerogro in 2024 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on: <a href="#" style={{textDecoration:"none"}}>HomePage </a>/<a href="#" style={{textDecoration:"none"}}> TradingQnA </a>/<a href="#" style={{textDecoration:"none"}}> Twitter </a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
