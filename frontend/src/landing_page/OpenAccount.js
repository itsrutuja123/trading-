import React from 'react';
function OpenAccount() {
    return (
        <div className="container p-5 mb-5"> {/*p-5=padding 5px*/}
            <div className="row text-center">
                
                    <h1 className="mt-5">Open a Zerogro account</h1>  {/*mt-5=margin-top*/}
                    <p className="mt-3 ">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades</p>
                    <a href="/signup"className="p-2 btn btn-primary fs-5 mb-5 mt-3" style={{width:"20%", margin:"0 auto"}}>Signup for free</a>
                </div>
        </div>
    );  
}


export default OpenAccount;