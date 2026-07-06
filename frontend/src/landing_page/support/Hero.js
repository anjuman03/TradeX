import React from "react";

function Hero() {
  return (
    <div className="bg-body-tertiary" style={{ height: "230px" }}>
      <div className="container bg-body-tertiary">
        <div className="row mb-3">
          <nav class="navbar navbar-expand-lg bg-body-tertiary mt-4">
            <div class="container-fluid">
              <h1 class="navbar-brand" className="">
                Support Portal
              </h1>
              <div
                class=" row collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <form class="d-flex " role="search">
                  <button class="btn btn-primary btn-lg" type="submit" style={{marginLeft:"56rem"}}>
                    My Tickets
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="row">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <div
                class=" row collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="&#128270;  Eg: How do i open my account , How do i activate F&O...."
                    aria-label="Search"
                    style={{height:"4rem"}}
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Hero;
