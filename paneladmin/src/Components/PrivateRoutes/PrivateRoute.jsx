import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../Middlewares/middlewares";
import Nav from "../Nav/Nav";
import { socket } from "../../socket";
import Styles from "../../Styles/dist/Layout.module.css";
import { useDispatch } from "react-redux";
import { getAllSupplies, getSupplieById } from "../../Redux/actions";

const PrivateRoute = () => {
  const [auth, setAuth] = useState(true);
  const dispatch = useDispatch();
  useEffect(function () {
    isAuthenticated().then((result) => {
      if (result === false) {
        setAuth(false);
      } else {
        dispatch(getAllSupplies());
      }
    });
    
    socket.on(
      "addproduct",
      function () {
        dispatch(getAllSupplies());
      },
      [dispatch]
    );
    socket.on("deleteItem", function () {
      dispatch(getSupplieById(null, true));
      dispatch(getAllSupplies());
    });

    socket.on("logout", function () {
      window.location.reload();
    });

    socket.on("connect", function () {
      isAuthenticated().then((result) => {
        if (result === false) {
          setAuth(false);
        } else {
          dispatch(getAllSupplies());
        }
      });
    });
  });
  return !!auth ? (
    <div className={Styles.container}>
      <Nav />
      <Outlet />
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};
export default PrivateRoute;
