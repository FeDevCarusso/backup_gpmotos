import React, { useState } from "react";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllRepuestos } from "./Redux/actions";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";
import Layout from "./Components/Layout";
import CardContainer from "./Components/Pages/Home/CardContainer";
import Auth from "./Components/Pages/Auth/Auth";
import Sidebar from "./Components/Sidebar/Sidebar";
import { socket } from "./config/socket";
import checkCookie from "./utils/functions/cookieCheck";
function App() {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(getAllRepuestos());
    socket.on("connect", function () {
      checkCookie();
    });
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            index
            element={
              <Layout>
                <Sidebar />
                <CardContainer />
              </Layout>
            }
          />
          <Route exact path="/auth" element={<Navigate to={"/auth/login"} />} />
          <Route
            path="/auth/:action"
            element={
              <Layout>
                <Auth />
              </Layout>
            }
          />
          <Route element={<PrivateRoutes />}>
            <Route path="/cart" element={<div>Private</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
