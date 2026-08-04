import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/Login");
  };

  return (
    <nav className="header-menu">
      <Link to="/">Home</Link>
      <Link to="/Budget">Budgets</Link>

      <div className="dropdown">
        <button className="dropbtn">Governing Documents ▾</button>
        <div className="dropdown-content">
          
          <div className="submenu">
            <Link to="#">Bylaws</Link>
            <div className="submenu-content">
              <Link to="/Bylaw1">Bylaw 1</Link>
              <Link to="/Bylaw2">Bylaw 2</Link>
              <Link to="/Bylaw3">Bylaw 3</Link>
              <Link to="/Bylaw4">Bylaw 4</Link>
              <Link to="/Bylaw5">Bylaw 5</Link>
            </div>
          </div>
          <div className="submenu">
            <Link to="#">Rules & Regulations</Link>
            <div className="submenu-content">
              <Link to="/Rules-Regulations">2011 Rules and Regulations</Link>
              <Link to="/Winter-Parking-Ban-Rule">Winter Parking Ban Rule</Link>
              <Link to="/Short-Term-Tenancies-Rule">Short Term Tenancies Rule</Link>
            </div>
          </div>
          <Link to="/Declaration">Declaration</Link>
        </div>
      </div>

      <Link to="/Contact">Contact Us</Link>
      <Link to="/AGM-Minutes">AGM Minutes</Link>
      <Link to="/Forms">Forms</Link>
      <Link to="/Newsletter">Newsletter</Link>
      <Link to="/ReserveFundStudy">Reserve Fund Study</Link>
      <Link to="/Visitor-Parking-Registration">Visitor Parking Registration</Link>
      <Link to="/Insurance-Certificate">Insurance Certificate</Link>
      <Link to="/Admin">Admin</Link>

      {token ? (
        <button className="login-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/Login" className="login-logout-btn">
          Login
        </Link>
      )}
    </nav>
  );
};

export default HeaderMenu;
