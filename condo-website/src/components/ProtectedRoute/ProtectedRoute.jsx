// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    // Not logged in → redirect to Login page
    return <Navigate to="/Login" replace />;
  }

  // Logged in → render the children component
  return children;
};

export default ProtectedRoute;
