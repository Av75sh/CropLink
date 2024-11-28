import React, { useState } from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import "../components/App.css"; 


function LoanCard({ title, features, loanAmount, maxTenure, additionalInfo }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="funding-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="title">{title}</h2>
      <div className="content">
        <div className="feature-section">
          <h3 className="font-bold">Features</h3>
          <p>{features}</p>
        </div>

        <div className="loan-details">
          <div className="detail">
            <h3 className="font-bold">Loan amount</h3>
            <p>{loanAmount}</p>
          </div>

          <div className="detail">
            <h3 className="font-bold">Maximum tenure</h3>
            <p>{maxTenure}</p>
          </div>
        </div>

        {additionalInfo && <p className="additional-info">{additionalInfo}</p>}

        {isHovered && (
          <div className="action-links">
            <div className="explore-more">Explore More</div>
            <div className="button-container">
              <a href="http://surl.li/uoozhf">
              <button className="apply-now">
                Apply Now <FaArrowRight />
              </button> </a>

              <a href="http://surl.li/uoozhf">
              <button className="locate-us">
                Locate Us <FaMapMarkerAlt />
              </button>
              </a>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


function App() {
  const loans = [
    {
      title: "Kisan Power",
      features: "Credit facility for farmers to meet cost of cultivation and post-harvest expenses",
      loanAmount: "Rs. 25,001 – Rs. 2.5 Cr",
      maxTenure: "5 years",
    },
    {
      title: "Kisan Matsya",
      features: "For meeting recurring expenses and investment needs of farmers involved in the fisheries sector",
      loanAmount: "Rs. 25,001 – Rs. 1.5 Cr",
      maxTenure: "3 years",
    },
    {
      title: "Poultry Power",
      features: "For financing the working capital and term loan requirements of the poultry units",
      loanAmount: "Rs. 2,00,000 – Rs. 5 Cr",
      maxTenure: "3 years",
    },
    {
      title: "Kisan Samarth 2.0",
      features: "For meeting consumption needs of farmers. Specially designed for farmers with non-agri sources of income.",
      loanAmount: "Rs. 1,00,001 – Rs. 5 Cr",
      maxTenure: "3.5 years",
      additionalInfo: "Loan against Axis Bank term/fixed deposit. No need to liquidate term/fixed deposit to meet consumption needs or farming requirements.",
    },
    {
      title: "Kisan Tatkal",
      features: "For meeting farming needs and consumption requirements of the farmers.",
      loanAmount: "Up to Rs 5 Cr",
      maxTenure: "1 year",
      additionalInfo: "Loan against Axis Bank term/fixed deposit. No need to liquidate term/fixed deposit to meet consumption needs or farming requirements.",
    },
    {
      title: "PM KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthan Mahabhiyan)",
      features: "To meet farmers contribution towards installation of standalone agriculture pumps and for solarisation of grid connected agriculture pumps",
      loanAmount: "Rs. 25,001 – Rs. 2.5 Cr",
      maxTenure: "Up to 7 years (including moratorium)",
    },
  ];

  return (
    <div className="app">
     
      <div className="hero-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>Farmer Funding</h1>
            <p>
              Farmer funding team aims to provide timely credit facilities to farmers, meeting all their
              cultivation, farm maintenance, consumption, and investment needs.
            </p>
            <div className="button-group">
  <a href="http://surl.li/uoozhf" className="apply-btn">
    <button className="apply-btn">Apply Now</button>
  </a>
  <a href="http://surl.li/uoozhf" className="locate-btn">
    <button className="locate-btn">Locate Nearest Branch</button>
  </a>
</div>

          </div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      
      <div className="funding-grid ">
        {loans.map((loan, index) => (
          <LoanCard key={index} {...loan} />
        ))}
      </div>
    </div>
  );
}

export default App;
