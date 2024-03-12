import "./login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import ModalMessageWindow from "../modalMessageWindow/ModalMessageWindow";

export default function Login({ setLoggedUserEmail }) {
  const [modalWindowMessage, setModalWindowMessage] = useState();
  const navigate = useNavigate();
  const signIn = useSignIn();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleLoginClick = async (event) => {
    event.preventDefault();
    const form = document.getElementById("loginForm");
    const isFormValid = form.checkValidity();

    if (!isFormValid) {
      form.reportValidity();
      return;
    }

    try {
      const data = { email: userEmail, password: userPassword };
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      if (!responseData.error) {
        if (responseData) {
          signIn({
            auth: {
              token: responseData.token,
            },
            userState: { email: userEmail },
          });
          localStorage.setItem("loggedInUserEmail", userEmail);

          setLoggedUserEmail(userEmail);
          navigate("/home");
        } else {
          throw new Error("Invalid response data");
        }
      } else {
        setModalWindowMessage("Duomenų atitikmenų nerasta.");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle the error, display an error message, etc.
    }
  };
  function handleEmailInputChange(event) {
    setUserEmail(event.target.value);
  }
  function handlePasswordInputChange(event) {
    setUserPassword(event.target.value);
  }
  return (
    <>
      <div className="loginScreen">
        <h1>Prisijungti</h1>
        <p>Elektroninis paštas</p>
        <form id="loginForm">
          <input
            type="email"
            id="loginUserNameInput"
            autoComplete="off"
            required
            onInput={handleEmailInputChange}
            value={userEmail}
          ></input>
          <p>Slaptažodis</p>
          <input
            type="password"
            id="loginUserPasswordInput"
            autoComplete="off"
            required
            onInput={handlePasswordInputChange}
            value={userPassword}
          ></input>
          <button className="loginButton" onClick={handleLoginClick}>
            Prisijungti
          </button>
          <div className="logInLinkContainer">
            <Link to="/register" className="loginPageLink">
              Registracija
            </Link>
            <Link to="/reset_password" className="loginPageLink">
              Pamiršau slaptažodį
            </Link>
          </div>
        </form>
      </div>
      <ModalMessageWindow message={modalWindowMessage} />
    </>
  );
}
