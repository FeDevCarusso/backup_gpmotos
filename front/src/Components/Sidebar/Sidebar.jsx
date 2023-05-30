import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Styles from "../../Styles/dist/Sidebar.module.css";
const Sidebar = () => {
  const [hideElement, setHideElement] = useState({
    element1: "none",
    element2: "none",
    element3: "none",
    element4: "none",
    element5: "none",

  });

  function hideHandler(e) {
    setHideElement({
      ...hideElement,
      [e]: hideElement[e] === "none" ? "block" : "none",
    });
  }
  return (
    <div className={Styles.container}>
      <ul className={Styles.dropdownContainer}>
        <li className={Styles.dropdownElement}>
          <h4
            className={Styles.dropdownTitle}
            onClick={(e) => hideHandler("element1")}
          >
            Categorias
            <FontAwesomeIcon className={Styles.dropdownIcon} icon={faAngleDown} />
          </h4>
          <ul
            className={Styles.dropdown}
            style={{ display: hideElement.element1 }}
          >
            <li className={Styles.downElement}>Cat 1</li>
            <li className={Styles.downElement}>Cat 2</li>
            <li className={Styles.downElement}>Cat 3</li>
            <li className={Styles.downElement}>Cat 4</li>
          </ul>
        </li>
        {/* borrar desde aqui */}
        <li className={Styles.dropdownElement}>
          <h4
            className={Styles.dropdownTitle}
            onClick={(e) => hideHandler("element2")}
          >
            Categorias
            <FontAwesomeIcon className={Styles.dropdownIcon} icon={faAngleDown} />
          </h4>
          <ul
            className={Styles.dropdown}
            style={{ display: hideElement.element2}}
          >
            <li className={Styles.downElement}>Cat 1</li>
            <li className={Styles.downElement}>Cat 2</li>
            <li className={Styles.downElement}>Cat 3</li>
            <li className={Styles.downElement}>Cat 4</li>
          </ul>
        </li>
        <li className={Styles.dropdownElement}>
          <h4
            className={Styles.dropdownTitle}
            onClick={(e) => hideHandler("element3")}
          >
            Categorias
            <FontAwesomeIcon className={Styles.dropdownIcon} icon={faAngleDown} />
          </h4>
          <ul
            className={Styles.dropdown}
            style={{ display: hideElement.element3}}
          >
            <li className={Styles.downElement}>Cat 1</li>
            <li className={Styles.downElement}>Cat 2</li>
            <li className={Styles.downElement}>Cat 3</li>
            <li className={Styles.downElement}>Cat 4</li>
          </ul>
        </li>
        <li className={Styles.dropdownElement}>
          <h4
            className={Styles.dropdownTitle}
            onClick={(e) => hideHandler("element4")}
          >
            Categorias
            <FontAwesomeIcon className={Styles.dropdownIcon} icon={faAngleDown} />
          </h4>
          <ul
            className={Styles.dropdown}
            style={{ display: hideElement.element4}}
          >
            <li className={Styles.downElement}>Cat 1</li>
            <li className={Styles.downElement}>Cat 2</li>
            <li className={Styles.downElement}>Cat 3</li>
            <li className={Styles.downElement}>Cat 4</li>
          </ul>
        </li>
        <li className={Styles.dropdownElement}>
          <h4
            className={Styles.dropdownTitle}
            onClick={(e) => hideHandler("element5")}
          >
            Categorias
            <FontAwesomeIcon className={Styles.dropdownIcon} icon={faAngleDown} />
          </h4>
          <ul
            className={Styles.dropdown}
            style={{ display: hideElement.element5}}
          >
            <li className={Styles.downElement}>Cat 1</li>
            <li className={Styles.downElement}>Cat 2</li>
            <li className={Styles.downElement}>Cat 3</li>
            <li className={Styles.downElement}>Cat 4</li>
          </ul>
        </li>
        {/* hasta aqui */}
      </ul>
    </div>
  );
};

export default Sidebar;
