import React, { useState, useEffect } from "react";
import Styles from "../../Styles/dist/Auth.module.css";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { socket } from "../../config/socket";
import switchChilds from "../../utils/functions/switchChilds";
const LoginForm = () => {
  const [done, setDone] = useState(false);
  const [username, setUsername] = useState("Admin");
  const [password, setpassword] = useState("Aa12345");
  useEffect(() => {
    socket.on("logged_in", function () {
      setDone(true);
    });
  });

  function login(e) {
    e.preventDefault();
    function init() {
      const children = e.target.children;
      switchChilds(children);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/login`,
          {
            username,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          if (err.response) {
            switchChilds(children);
            if (err.response.status === 401) {
              return alert("Contraseña incorrecta");
            }
          }
        });
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (username.length < 1) {
      return alert("Debes completar tu  nombre de usuario");
    }
    if (typeof username !== "string") {
      return alert("Ingrese un usuario valido");
    }

    if (!passwordRegex.test(password)) {
      return alert(
        "Ingrese una contraseña segura de al menos 6 caracteres, una mayuscula y un numero"
      );
    }
    init();
  }

  return !!done ? (
    <Navigate to={"/"} />
  ) : (
    <div className={Styles.formContainer}>
      <h2 className={Styles.title}>Iniciá Sesión</h2>
      <form className={Styles.form} onSubmit={(e) => login(e)}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name=""
          placeholder="Nombre de usuario"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          name=""
          placeholder="Contraseña"
        />
        <div className={Styles.buttonHolder}>
          <input type="submit" value="Iniciar sesión" />
        </div>
      </form>
      <Link className={Styles.recover} to={"/recover"}>
        Perdi mi cuenta
      </Link>
    </div>
  );
};

export default LoginForm;
