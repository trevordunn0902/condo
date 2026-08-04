import React from "react";
import "./Forms.css";

import NewOwner from "@/assets/pdf/forms/CCC276_NewOwnerForm.pdf";
import Modification from "@/assets/pdf/forms/Modification-Request-Application.pdf";
import SummaryLeaseRenewal from "@/assets/pdf/forms/Summary_of_Lease_or_Renewal.pdf";

const Forms = () => {
  return (
    <div className="forms-page">
      <div className="forms-content">
        <h1 className="forms-title">Forms</h1>

        {/* Section 1: Owners */}
        <h2 className="forms-section-title">Forms for All Owners</h2>
        <p className="forms-section-text">
          Please find the relevant forms below for all unit owners.
        </p>

        <ul className="forms-list">
          <li>
            <a href={NewOwner} download className="download-link">
              CCC276 New Owner Form
            </a>
          </li>
          <li>
            <a href={Modification} download className="download-link">
              Modification Request Application
            </a>
          </li>
        </ul>

        <h2 className="forms-section-title">Forms for Landlords</h2>
        <p className="forms-section-text">
          Condo owners in Ontario must notify their condo corporation when they rent/lease their units. They{" "}
          <strong>must use this form</strong> if they do not wish to separately share{" "}
          <strong>their tenant's name, their own address and a copy of the lease</strong> with their condo corporation.
        </p>
        <p className="forms-section-text">
          Whatever the preferred method, owners must notify their condo about a lease within 10 days of entering or renewing that lease.
        </p>

        <ul className="forms-list">
          <li>
            <a href={SummaryLeaseRenewal} download className="download-link">
              Summary of Lease or Renewal
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Forms;
