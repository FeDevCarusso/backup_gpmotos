import React, { useEffect, useState } from "react";
import LoginForm from "../Components/Forms/LoginForm/LoginForm";
import RegisterForm from "../Components/Forms/RegisterForm/RegisterForm";
import Loading from "../Components/Loading/Loading";
const Login = () => {
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    if (localStorage.getItem("7f814bafde5719f27df6a20bd5722a86")) {
      console.log(
        localStorage.getItem("7f814bafde5719f27df6a20bd5722a86") ===
          "32e0832a150e49d4b8ff84c400ea5e025f556cd3"
      );
      window.location.replace("/dashboard");
    }
  });
  const [action/*, setAction*/] = useState("login");
  return !!loading ? (
    <Loading />
  ) : (
    <div>{action === "login" ? <LoginForm /> : <RegisterForm />}</div>
  );
};

export default Login;
