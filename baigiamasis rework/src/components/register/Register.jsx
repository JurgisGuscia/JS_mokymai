import "./register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalMessageWindow from "../modalMessageWindow/ModalMessageWindow";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalWindowMessage, setModalWindowMessage] = useState("");

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }
  function handleUsernameInput(event) {
    setUsername(event.target.value);
  }
  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }
  function handleRegisterResponse(response, message) {
    setModalWindowMessage(message);
    resetForm();
  }
  function resetModalState() {
    setModalWindowMessage("");
  }
  function resetForm() {
    setEmail("");
    setUsername("");
    setPassword("");
  }

  const handleRegisterClick = (event) => {
    if (email && username && password) {
      event.preventDefault();
      const data = {
        userEmail: email,
        userUsername: username,
        userPassword: password,
      };
      fetch("http://localhost:8080/registerUser", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .catch((err) => console.log(err))
        .then(function (response) {
          return response.json();
        })
        .then(async (data) => {
          handleRegisterResponse(await data.result, data.message);
        });
    }
  };
  return (
    <>
      <div className="registerScreen">
        <h1>Registracija</h1>
        <p>Elektroninis paštas</p>
        <form>
          <input
            type="email"
            id="registerEmailinput"
            onInput={handleEmailInput}
            autoComplete="off"
            value={email}
            required
          ></input>
          <p>Vartotojo vardas</p>
          <input
            type="text"
            id="registerUserNameInput"
            onInput={handleUsernameInput}
            autoComplete="off"
            value={username}
            required
          ></input>
          <p>Slaptažodis</p>
          <input
            type="password"
            id="registerUserPasswordInput"
            autoComplete="off"
            onInput={handlePasswordInput}
            value={password}
            required
          ></input>
          <button className="loginButton" onClick={handleRegisterClick}>
            Registruotis
          </button>
        </form>
        <div className="logInLinkContainer">
          <Link
            to="/"
            className="loginPageLink"
            onClick={() => {
              resetForm();
              resetModalState();
            }}
          >
            Prisijungimas
          </Link>
          <Link
            to="/reset_password"
            className="loginPageLink"
            onClick={() => {
              resetForm();
              resetModalState();
            }}
          >
            Pamiršau slaptažodį
          </Link>
        </div>
      </div>
      <ModalMessageWindow message={modalWindowMessage} />
    </>
  );
}
