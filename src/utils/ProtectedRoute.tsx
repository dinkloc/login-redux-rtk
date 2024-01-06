import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const ProtectedRoute: React.FC = () => {
  const isSuccess = useAppSelector((state) => state.isSuccess);
  console.log(isSuccess);
  if (!isSuccess) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoute;
