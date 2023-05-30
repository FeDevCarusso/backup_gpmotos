import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/dist/Nav.module.css";
const API_URL = "http://localhost:3001";

const Nav = () => {
  function logout(e) {
    e.preventDefault();
    axios.get(`${API_URL}/logout`, { withCredentials: true });
    localStorage.removeItem("7f814bafde5719f27df6a20bd5722a86");
  }
  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <Link className={Styles.nav__link} to={"/dashboard"}>Inicio</Link>
        </li>
        <li>
          <Link className={Styles.nav__link} to={"/supplies"}>Insumos</Link>
        </li>
        <li>
          <Link className={Styles.nav__link}>Configuracion</Link>
        </li>
        <li>
          <form onSubmit={(e) => logout(e)}>
            <input className={Styles.nav__link} type="submit" value="Cerrar Sesion" />
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
