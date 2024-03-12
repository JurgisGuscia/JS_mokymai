import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import ResetPassword from "../../components/resetPassword/ResetPassword";
import Home from "../../components/home/Home";
import "./landing.scss";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import { useState } from "react";

export default function Landing() {
  const [loggedUserEmail, setLoggedUserEmail] = useState();
  return (
    <div className="loginContainer">
      <Routes>
        <Route
          path="/"
          element={<Login setLoggedUserEmail={setLoggedUserEmail} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route
          path="/home"
          element={
            <RequireAuth fallbackPath="/">
              <Home loggedUserEmail={loggedUserEmail} />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}
