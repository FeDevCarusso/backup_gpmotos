import React, { useState } from "react";
import Styles from "../../../Styles/dist/AuthForm.module.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
import gpLogo from "../../../misc/img/gplogo.png";

const LoginForm = () => {
  const API_URL = "http://localhost:3001";
  console.log(API_URL);

  const [loading, setLoading] = useState(false);
  const [userdata, setUserData] = useState({
    username: "Admin",
    password: "Aa123456",
  });

  const [done, setDone] = useState(false);

  async function submitHandler(e) {
    console.log(API_URL);
    e.preventDefault();
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!userdata.username.length) {
      return alert("Ingrese un nombre de usuario.");
    }
    if (typeof userdata.username !== "string") {
      return alert("Ingrese un nombre de usuario válido");
    }
    if (!userdata.password.length || !passRegex.test(userdata.password)) {
      return alert(
        "Ingrese una contraseña de al menos 8 caracteres, debe incluir al menos una mayuscula y un numero."
      );
    }

    if (userdata.username.length && userdata.password.length) {
      const login = await axios.post(
        `${API_URL}/login`,
        {
          username: userdata.username,
          password: userdata.password,
        },
        { withCredentials: true }
      );
      const response = await login.data;
      console.log(response);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (response === "done") {
          setDone(true);
        } else {
          setDone(false);
          alert("Error al iniciar sesion");
        }
      }, 1500);
    }
  }

  function changeHandler(e) {
    setUserData({
      ...userdata,
      [e.target.name]: e.target.value,
    });
    e.target.setAttribute("class", `${Styles.input}`);
  }

  return !!done ? (
    <Navigate to={"/dashboard"} />
  ) : loading ? (
    <Loading />
  ) : (
    <div className={Styles.container}>
      <img style={{marginBottom:"2em"}} className={Styles.logo} width={"300px"} src={gpLogo} alt="gpmotos_logo" />

      <form onSubmit={(e) => submitHandler(e)} className={Styles.form}>
        <input
          className={`${Styles.input}`}
          type="text"
          name="username"
          id="username"
          placeholder="Ingrese nombre"
          onChange={(e) => changeHandler(e)}
          value={userdata.username}
        />
        <input
          className={Styles.input}
          type="text"
          name="password"
          id="password"
          placeholder="Ingrese la contraseña"
          onChange={(e) => changeHandler(e)}
          value={userdata.password}
        />

        <input
          className={`${Styles.input} ${Styles.submit}`}
          type="submit"
          value="Iniciar sesión"
        />
      </form>
    </div>
  );
};

export default LoginForm;
