import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 text-center mt-5 mb-5">
        <h1 classNmae="fs-4 ">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.{" "}
        </h1>
      </div>
      <div
        className="row p-5 mt-5 border-top text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            Our journey began on Oct 20th, 2024, with a mission to overcome the
            challenges faced by traders and investors in India, especially when
            it comes to cost, support, and technology. We chose the name
            Zerogro, combining "Zero" with "Gro" (growth), reflecting our
            commitment to removing barriers and fostering growth in the
            investment space. <br />
            <br />
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
            <br />
            <br />
            With over 1+ Crore clients, we facilitate millions of transactions
            daily across our robust suite of investment platforms, contributing
            to more than 15% of all retail trading activity in India.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            <br />
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
            <br />
            <br />
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              blog
            </a>{" "}
            or see what the media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
