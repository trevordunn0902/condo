import React from "react";
import "./Contact-Us.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>

        <p className="small bold">Your Current board of Directors are:</p>
        <p className="small bold italic">Christopher Hendriks, President</p>
        <p className="small email">
          <a href="mailto:example1@email.com">chris@ccc276.ca</a>
        </p>

        <div className="underline"></div>
     
        <p className="small bold italic">Fiona Cornel, Vice President</p>
        <p className="small email">
          <a href="mailto:example2@email.com">fiona@ccc276.ca</a>
        </p>

        <div className="underline"></div>
 
        <p className="small bold italic">Chris Dunn, Secretary/Treasurer</p>
        <p className="small email">
          <a href="mailto:example2@email.com">chrisdunn@ccc276.ca</a>
        </p>

        <div className="underline"></div>

        <p className="small bold italic">Property Manager</p>
        <p className="small bold">Trivium Property Management</p>
        <p className="small">Tiffany van Dodewaard</p>
        <p className="small email">
          <a href="mailto:example3@email.com">Tiffany@triviumpm.ca</a>
        </p>
        <p className="small">Phone: (613) 604-4464</p>

        <div className="dashline"></div>

        <p className="small">Chloe Ziegler</p>
        <p className="small email">
          <a href="mailto:example4@email.com">chloe@triviumpm.ca</a>
        </p>
        <p className="small">Phone: (613) 519-1781</p>

        <div className="dashline"></div>

        <p className="small">Abbigale Geertsma</p>
        <p className="small email">
          <a href="mailto:example5@email.com">Abbigale@triviumpm.ca</a>
        </p>
        <p className="small">Phone: (613) 519-1851</p>
      </div>
    </div>
  );
};

export default Contact;
