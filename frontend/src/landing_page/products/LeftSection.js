import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container my-5"> {/* Use consistent vertical spacing */}
            <div className="row align-items-center"> {/* Ensure vertical alignment */}
                <div className="col-6 p-4"> {/* Adjust padding */}
                    <img src={imageURL} alt={productName} />
                </div>
                <div className="col-6 p-4"> {/* Adjust padding */}
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mb-3">
                        <a href={tryDemo}>Try Demo <i className="fa fa-long-arrow-right" style={{ color: "blue" }}></i></a>
                        <a href={learnMore} style={{ marginLeft: "20px" }}>Learn More <i className="fa fa-long-arrow-right" style={{ color: "blue" }}></i></a>
                    </div>
                    <div className="no-underline">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{ marginRight: "15px" }} /></a>
                        <a href={appStore}><img src="media/images/appStoreBadge.svg" alt="App Store" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
