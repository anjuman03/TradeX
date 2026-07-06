import React from "react";

function Brokerage() {
  return (
    <div className="container text-muted" >
      <div className="fs-3 border-bottom" style={{ margin: "0 0 4rem 4rem" }}>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#" className="text-muted text-decoration-none mx-4">
              Equity
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link mx-4" href="#" >
                    Currency
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Commodity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> 
      {/* <div className="container" style={{ margin: "0 0 4rem 4rem",border:"1px solid #f4f4f4",display:"block"}}>
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Equity delivery</th>
                    <th>Equity delivery</th>
                    <th>Equity delivery</th>
                    <th>Equity delivery</th>
                </tr>
            </thead>
        </table>
      </div> */}
    </div>
  );
}

export default Brokerage;
