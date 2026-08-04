import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();

  const goToVehicles = () => {
    navigate("/Vehicles");
  };

  return (
    <div className="page-container">
      <div className="admin-page-content">
        <h1 className="page-title">Admin Dashboard</h1>

        <p className="small">
          Welcome to the admin dashboard! This page will serve as the central hub for all administrative tools and management controls.
        </p>

        <div className="underline"></div>

        <div className="admin-section">
          <h2 className="small bold">Vehicle Management</h2>
          <p className="small italic">
            Use the Vehicles tool to add, update, or remove vehicles registered to units. Example text here to describe functionality – you can update it later.
          </p>
          <button className="dashboard-btn" onClick={goToVehicles}>
            Go to Vehicles
          </button>
        </div>

        <div className="dashline"></div>

        <div className="admin-section">
          <h2 className="small bold">Future Tools</h2>
          <p className="small">
            Additional administrative tools will appear here. This area may include user management, board notices, and other controls in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
