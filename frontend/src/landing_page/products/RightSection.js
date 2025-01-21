import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container my-5"> {/* Use consistent vertical spacing */}
            <div className="row align-items-center"> {/* Ensure vertical alignment */}
                <div className="col-6 p-4 order-md-2"> {/* Adjust padding and ensure order on larger screens */}
                    <img src={imageURL} alt={productName} />
                </div>
                <div className="col-6 p-3"> {/* Adjust padding */}
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore}>Learn More <i className="fa fa-long-arrow-right" style={{ color: "blue" }}></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSection;
