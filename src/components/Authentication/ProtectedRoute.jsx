// src/components/Authentication/ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useUser } from "../../contexst/UserContext";

const ProtectedRoute = ({ children }) => {
  const { loading } = useUser();
  const location = useLocation();
  
  if (loading) {
    return <div>Loading...</div>; // Show loader during initialization
  }

  const token = Cookies.get("token");
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;