import React from "react";
import "./Visitor-Parking-Registration.css";

const VisitorParking = () => {
  return (
    <div className="visitor-page">
      <div className="visitor-content">
        <h1 className="visitor-title">Visitor Parking Registration</h1>

        <p className="visitor-text">
          Note: <strong>Homeowners / Tenants may not park their own vehicles in the visitor parking at any time and are subject to being ticketed and towed if they choose to park in visitor parking.</strong>
        </p>

        <p className="visitor-text">
          Carleton Parking has been contracted to monitor parking on Sandhamn Private.
        </p>

        <p className="visitor-text">
          Contact: 
          <a href="https://carletonparking.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link">carletonparking.com
          </a> or by calling <strong><em>613-720-5021</em></strong>
        </p>
      </div>
    </div>
  );
};

export default VisitorParking;
