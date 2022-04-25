import { useEffect } from "react";
import "./LoginFormSuccsess.css";

function LoginFormSuccsess({ dataUser, setDataUser }) {
  //extract the values from dataUser state
  const { email, tipo } = dataUser;

  //get the user data from local storage when loading the component
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("staxUser"));
    setDataUser(data);
  }, []);

  return (
    <form>
      <h3 className="LoginSuccsessTitle">Welcome Back!</h3>
      <h4 className="LoginMailUser">{email}</h4>
      <h4 className="LoginTypeUser">{tipo}</h4>
    </form>
  );
}

export default LoginFormSuccsess;
