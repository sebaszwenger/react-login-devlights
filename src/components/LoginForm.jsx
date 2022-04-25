import { useEffect, useState } from "react";
import Error from "./Error";
import "./LoginForm.css";

/**
 * Datos validos:
 * Email: seba@test.com
 * Password: seba
 */

function LoginForm({ setIsLogged, setDataUser, setRegister }) {
  //state that stores the fields of the form
  const [user, setUser] = useState({
    email: "",
    password: "",
    tipo: "",
  });

  //state that saves the error message to print on the screen
  const [message, setMessage] = useState("");

  //state that checks if there is an error in the form data
  const [error, setError] = useState(false);

  //extract values ​​from user state
  const { email, password, tipo } = user;

  //change the header text when the component loads
  useEffect(() => {
    document.querySelector("#header").textContent = "Stax Food Admin Login";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    //validate the form data
    if ([email, password, tipo].includes("")) {
      setMessage("All fields are required");
      setError(true);
      return;
    }
    setError(false);

    //validate username and password and store data in local storage
    if (email === "seba@test.com" && password === "seba") {
      window.localStorage.setItem("isLogged", true);
      window.localStorage.setItem("staxUser", JSON.stringify(user));

      setIsLogged("true");
      setDataUser(user);

      return;
    } else {
      setError(true);
      window.localStorage.setItem("isLogged", false);
      setMessage("Invalid username or password");
    }
  }

  //stores the data entered in each field of the form
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  //activate user registration mode
  function register() {
    setRegister(true);
  }

  //...
  function forgotPassword(e) {
    e.preventDefault();
    console.log("forgot password?");
  }

  return (
    <form className="form">
      <legend>Please fill in your unique login details below</legend>
      {error && <Error message={message} />}
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          value={password}
          type="password"
          onChange={handleChange}
        />
      </div>
      <label className="labelTipo" htmlFor="tipo">
        Tipo
      </label>
      <select name="tipo" id="tipo" onChange={handleChange}>
        <option value="">-----------</option>
        <option value="alumno">Alumno</option>
        <option value="profesor">Profesor</option>
      </select>

      <a href="#" className="linkForgotPassword" onClick={forgotPassword}>
        forgot password?
      </a>
      <button className="btnForm" onClick={handleSubmit}>
        Sign in
      </button>

      <p className="signUp">
        Don´t have an account?{" "}
        <a href="#" className="linkRegister" onClick={register}>
          Sing Up
        </a>
      </p>
    </form>
  );
}

export default LoginForm;
