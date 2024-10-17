import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f0f0" }}>
      <div style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
