import React from 'react';
function Brokerage () {
    return ( 
       <div className="container">
            <div className="row p-5 mt-5 border-top">
                <div className="col-8 p-4 ">
                    <a href="#" style={{textDecoration:"none"}}><h3 className="fs-4 text-center mb-3" >Brokerage Calculator</h3></a>
                    <ul className='text-left text-muted ' style={{lineHeight:"2.4",fontSize:"14px"}}>
                        <li>Call & trade and RMS auto -squareoff: Additional charges of ₹90+ GST per order.</li>
                        <li>Digital contract notes will be snet via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹50 per contract note. courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.7% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.8% or ₹500 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balanace, any order placed will be charged ₹90 per executed order instead of ₹30 per executed order.</li>
                    </ul>

                </div>
                <div className="col-4 p-4 text-center">
                    <a href="#" style={{textDecoration:"none"}}><h3 className="fs-5 text-center">List of charges</h3></a>
                </div>
            </div>
       </div>
    );
}

export default Brokerage;