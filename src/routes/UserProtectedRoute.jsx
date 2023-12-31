import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UserProtectedRoute = () => {
  const user = useSelector((state) => state.auth.userInfo);
  return (
    <div>
      <div>
        {user?.role === "employee" ? <Outlet /> : <Navigate to="/" replace />}
      </div>
    </div>
  );
};

export default UserProtectedRoute;
