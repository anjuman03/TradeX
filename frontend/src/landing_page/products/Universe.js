import React from "react";

function Universe() {
  return (
    <div className="container" style={{ width: "60%" }}>
      <div className="container" style={{ width: "100%", marginTop: "6rem" }}>
        <div className="row text-center my-5">
          <h4>The TradeX Universe</h4>
          <p className="mt-3 fs-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row">
          <div className="col-4 p-4 text-center">
            <img
              src="media/images/zerodhaFundhouse.png"
              className="mb-3"
              style={{ width: "150px" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-4 text-center">
            <img
              src="media/images/sensibullLogo.svg"
              className="mb-3"
              style={{ width: "150px" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-4 text-center">
            <img
              src="media/images/tijori.svg"
              className="mb-3"
              style={{ width: "150px" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-4 text-center">
            <img
              src="media/images/streakLogo.png"
              className="mb-3"
              style={{ width: "150px" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-4 text-center">
            <img
              src="media/images/smallcaseLogo.png"
              className="mb-3"
              style={{ width: "150px" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-4 text-center">
            <img
              src="media/images/dittoLogo.png"
              className="mb-3"
              style={{ width: "150px" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>
        <div className='container text-center '>
            <div className='row my-5'>
                <button className='btn btn-primary btn-lg col-3 m-auto fs-4 mb-5' onClick={() => window.location.href = '/signup'}>Sign up for free</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
