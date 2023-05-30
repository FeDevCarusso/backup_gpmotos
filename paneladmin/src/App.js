import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { socket } from "./socket.js";
import { useEffect } from "react";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoute";
import Supplies from "./Pages/Supplies";
import CreateSupplie from "./Pages/CreateSupplie";
import SupplieDetail from "./Pages/SupplieDetail";
export const { API_URL } = "http://localhost:3001";

function App() {
  useEffect(function () {
    socket.on("connect", function () {
      console.log("Connection succefull");
    });

    socket.on("disconnect", function () {
      console.log("Connection end");
    });
    socket.on("addproduct", function(){
      console.log("s")
    })
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/supplies" element={<Supplies />} />
            <Route path="/createsupplie" element={<CreateSupplie />} />
            <Route path="/supplie/:id" element={<SupplieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
