import React, { useState } from "react";
import Styles from "../../Styles/dist/Auth.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  function onSubmitHandler(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, {
        firstName,
        lastName,
        email,
        password,
        username,
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <div className={Styles.formContainer}>
      <h2 className={Styles.title}>Registrate</h2>
      <form onSubmit={(e) => onSubmitHandler(e)} className={Styles.form}>
        <input
          type="text"
          className="name"
          placeholder="Nombre"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="lastname"
          placeholder="Apellido"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Ingrese su mail"
          value={email}
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          id="passConfirmation"
          placeholder="Confirme su contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={true}
        />
        <div className={Styles.buttonHolder}>
          <input type="button" value="Cancelar" />
          <input type="submit" value="Registrarse" />
        </div>
      </form>
      <h4 className={Styles.ask}>
        Si ya tenés una cuenta de GP Motos, podes{" "}
        <Link to={"/auth"}>Iniciar Sesión</Link>
      </h4>
    </div>
  );
};

export default RegisterForm;
