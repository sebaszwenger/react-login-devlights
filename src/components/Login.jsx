import { useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import LoginFormSuccsess from "./LoginFormSuccsess";

import "./Login.css";

function Login() {
  //State that checks if the user is logged in
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("isLogged")
  );

  //state that stores the user data
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
    tipo: "",
  });

  //State that checks if it is in user registration mode
  const [register, setRegister] = useState(false);

  return (
    <div className="container">
      <h1 id="header">Stax Food Admin Login</h1>
      <div className="form-container">
        {isLogged === "true" ? (
          <LoginFormSuccsess dataUser={dataUser} setDataUser={setDataUser} />
        ) : register ? (
          <RegisterForm setRegister={setRegister} />
        ) : (
          <LoginForm
            setRegister={setRegister}
            setIsLogged={setIsLogged}
            setDataUser={setDataUser}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
