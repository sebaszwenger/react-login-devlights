import { useEffect, useState } from "react";
import Error from "./Error";

import "./RegisterForm.css";

function RegisterForm({ setRegister }) {
  //stores the form fields
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });
  //state that checks if there is an error in the form data
  const [error, setError] = useState(false);
  //state that saves the error message to print on the screen
  const [message, setMessage] = useState("");
  //extract values ​​from user state
  const { nombre, apellido, email, password } = user;

  //change the header text when the component loads
  useEffect(() => {
    document.querySelector("#header").textContent = "Stax Food Admin Register";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    //validate the form data
    if ([nombre, apellido, email, password].includes("")) {
      setError(true);
      setMessage("All fields are required");
      return;
    }
    console.log(
      `Los datos del registro son:
      nombre: ${nombre}
      apellido: ${apellido}
      email ${email}
      password ${password}`
    );
    setRegister(false);
    setError(false);
  }

  //stores the data entered in each field of the form
  function onChange(e) {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  }

  //activate user registration mode
  function register() {
    setRegister(false);
  }

  return (
    <form className="LoginForm">
      <h4 className="LoginRegisterDescription">Sign up To Get Started</h4>
      {error && <Error message={message} />}
      <div>
        <label htmlFor="nombre" className="LoginFormInputLabel">
          Nombre
        </label>
        <input
          name="nombre"
          id="nombre"
          type="text"
          className="LoginFormInput"
          value={nombre}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="apellido" className="LoginFormInputLabel">
          Apellido
        </label>
        <input
          name="apellido"
          id="apellido"
          type="text"
          className="LoginFormInput"
          value={apellido}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="LoginFormInputLabel">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          className="LoginFormInput"
          value={email}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="password" className="LoginFormInputLabel">
          Password
        </label>
        <input
          name="password"
          id="password"
          value={password}
          type="password"
          className="LoginFormInput"
          onChange={onChange}
        />
      </div>

      <button className="btnRegister" onClick={handleSubmit}>
        Register
      </button>

      <p className="logIn">
        You are registered?{" "}
        <a href="#" className="linkLogIn" onClick={register}>
          Login
        </a>
      </p>
    </form>
  );
}

export default RegisterForm;
