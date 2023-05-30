import React from "react";
import { NavLink /**useLocation**/ } from "react-router-dom";
import Styles from "../../Styles/dist/Nav.module.css";
// const a = ["default", "faroles", "tableros", "repuestos", "accesorios", "cascos", "cubiertas", "lubricantes", "baterias", "frenos", "suspension", "kits"]
// a.push()
const Nav = (props) => {
  // const path = useLocation().pathname
  let can = localStorage.getItem("login") === "OK" ? "OK" : "NO";
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.nav__ul}>
        <li>
          <NavLink className={Styles.nav__link} to={"/"}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink className={Styles.nav__link} to={"/offer"}>
            Ofertas
          </NavLink>
        </li>
        <li>
          <NavLink
            className={Styles.nav__link}
            to={can === "OK" ? "/perfil" : "/auth"}
          >
            {can === "OK" ? "Perfil" : "Inicia sesión"}
          </NavLink>
        </li>
        {can === "OK" ?? (
          <li>
            <NavLink className={Styles.nav__link} to={"/cart"}>
              Mi carrito
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
