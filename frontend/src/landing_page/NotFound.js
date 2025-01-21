import React from 'react';
function NotFound() {
    return (
        <div className="container p-5 mb-5"> {/*p-5=padding 5px*/}
            <div className="row text-center">
                
                    <h1 className="mt-5">404 Not Found</h1>  {/*mt-5=margin-top*/}
                    <p className="mt-3 ">Sorry, the page you are looking or does not exist.</p>
                    
                </div>
        </div>
    );  
}


export default NotFound;