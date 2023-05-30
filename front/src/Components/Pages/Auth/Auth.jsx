import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import RegisterForm from "../../Forms/RegisterForm";
import LoginForm from "../../Forms/LoginForm";
import Styles from "../../../Styles/dist/Auth.module.css";
import axios from "axios";
const Auth = () => {
  const [done, setDone] = useState(false);
  const path = useLocation().pathname;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/checkauth`, {
        withCredentials: true,
      })
      .then((response) => {
        setDone(response.data);
      });
  });
  return done ? (
    <Navigate to={"/"} />
  ) : (
    <div className={Styles.root}>
      <div className={Styles.redir}>
        <Link
          className={Styles.redir_l}
          to={path === "/auth/login" ? "/auth/register" : "/auth/login"}
        >
          {path === "/auth/login" ? "Registrate" : "Inicia sesión"}
        </Link>
      </div>

      {path === "/auth" ? (
        <Navigate to={"/auth/login"} />
      ) : (
        <div className={Styles.container}>
          {path === "/auth/register" ? <RegisterForm /> : <LoginForm />}
        </div>
      )}
    </div>
  );
};

export default Auth;
