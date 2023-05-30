import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";
// const mockImg =
//   "https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png";
const PrivateRoutes = (props) => {
  useEffect(function () {
    axios
      .get(`${process.env.REACT_APP_API_URL}/checkauth`, {
        withCredentials: true,
      })
      .then((res) => {
        
        localStorage.setItem("login", res.data === true?"OK":"NO");
      });
  });
  return !!localStorage.getItem("login")==="OK" ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoutes;
