import React from "react";

function CreateTicket() {
  const categories = [
    {
      title: "Account Opening",
      icon: "bi-person-plus",
    },
    {
      title: "Your TradeX Account",
      icon: "bi-person-circle",
    },
    {
      title: "Trading",
      icon: "bi-graph-up-arrow",
    },
    {
      title: "Funds",
      icon: "bi-currency-rupee",
    },
    {
      title: "Portfolio",
      icon: "bi-bullseye",
    },
    {
      title: "Coin",
      icon: "bi-clock-history",
    },
  ];

  const notices = [
    "Surveillance measure on scrips - July 2026",
    "Current Buybacks - July 2026",
  ];

  const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Trading user manual",
    "Learn how to create a ticket",
  ];

  return (
    <div className="container my-5">
      <div className="row">

        {/* Left Section */}
        <div className="col-lg-8">

          {categories.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center mb-4"
              style={{
                border: "1px solid #dee2e6",
                borderRadius: "4px",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <div className="d-flex align-items-center">

                {/* Icon */}
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRight: "1px solid #dee2e6",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#387ed1",
                    fontSize: "26px",
                  }}
                >
                  <i className={`bi ${item.icon}`}></i>
                </div>

                {/* Title */}
                <h5
                  className="mb-0 ms-4"
                  style={{
                    fontWeight: "400",
                  }}
                >
                  {item.title}
                </h5>
              </div>

              {/* Arrow */}
              <div
                className="me-4"
                style={{
                  color: "#387ed1",
                  fontSize: "20px",
                }}
              >
                <i className="bi bi-chevron-down"></i>
              </div>
            </div>
          ))}

        </div>

        {/* Right Section */}
        <div className="col-lg-4">

          {/* Notices */}
          <div
            style={{
              background: "#fff8ea",
              borderLeft: "4px solid orange",
              padding: "20px",
              marginBottom: "25px",
            }}
          >
            <ul className="mb-0">
              {notices.map((notice, index) => (
                <li key={index} className="mb-3">
                  <a
                    href="/"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      color: "#387ed1",
                      textDecoration: "none",
                    }}
                  >
                    {notice}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div
            style={{
              border: "1px solid #dee2e6",
            }}
          >
            <div
              style={{
                background: "#f7f7f7",
                padding: "18px",
                fontWeight: "600",
                fontSize: "22px",
              }}
            >
              Quick Links
            </div>

            {quickLinks.map((link, index) => (
              <div
                key={index}
                style={{
                  padding: "18px",
                  borderTop: "1px solid #dee2e6",
                }}
              >
                <span>{index + 1}. </span>

                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    color: "#387ed1",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default CreateTicket;