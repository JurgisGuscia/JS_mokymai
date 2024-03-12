import "./resetPassword.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalMessageWindow from "../modalMessageWindow/ModalMessageWindow";

export default function Login() {
  const [modalWindowMessage, setModalWindowMessage] = useState("");

  const [email, setEmail] = useState("");
  const handleResetClick = (event) => {
    const form = document.getElementById("resetPassForm");
    let isFormValid = form.checkValidity();
    if (!isFormValid) {
      form.reportValidity();
    } else {
      event.preventDefault();
      function handleResetPasswordResponse(msg) {
        setModalWindowMessage(msg.message);
        setEmail("");
      }
      /*
      TODO:
        check use exists
        send password reset link
        show modal with response
      */
      const emailObj = { email };
      fetch("http://localhost:8080/resetPassword", {
        method: "post",
        body: JSON.stringify(emailObj),
        headers: { "Content-Type": "application/json" },
      })
        .catch((err) => console.log(err))
        .then((response) => response.json())
        .then(async (response) => {
          console.log(await response);
          handleResetPasswordResponse(await response);
        });

      // setModalWindowMessage(
      //   "Paštu išsiųstas laiškas su slaptažodžio pakeitimo nuoroda."
      // );
      // setEmail("");
    }
  };

  function handleResetPasswordInputChange(event) {
    setEmail(event.target.value);
  }

  return (
    <>
      <div className="resetPasswordScreen">
        <h1>Keisti slaptažodį</h1>
        <form id="resetPassForm">
          <p>Elektroninis paštas</p>
          <input
            type="email"
            id="resetPasswordEmailInput"
            autoComplete="off"
            required
            onChange={handleResetPasswordInputChange}
            value={email}
          ></input>

          <button className="loginButton" onClick={handleResetClick}>
            Keisti
          </button>
          <div className="logInLinkContainer">
            <Link to="/register" className="loginPageLink">
              Registracija
            </Link>
            <Link to="/" className="loginPageLink">
              Prisijungimas
            </Link>
          </div>
        </form>
      </div>
      <ModalMessageWindow message={modalWindowMessage} />
    </>
  );
}
