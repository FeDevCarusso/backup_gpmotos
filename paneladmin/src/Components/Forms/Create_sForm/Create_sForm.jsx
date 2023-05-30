import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Styles from "../../../Styles/dist/Create_sForm.module.css";
import Alert, { baseState } from "../../Alert/Alert";
const API_URL = "http://localhost:3001";

const CreatesForm = () => {
  const [done, setDone] = useState(false);
  const [alertData, setAlertData] = useState({
    type: "",
    title: "",
    message: [],
    action: "",
    pathname: "",
    productImage: "",
  });

  const [supplieData, setSupplieData] = useState({
    code: "",
    productBrand: "",
    productName: "",
    model: "",
    price: "",
    type: "",
  });
  const [productImage, setProductImage] = useState("");

  function onChangeHandler(e) {
    setSupplieData({
      ...supplieData,
      [e.target.name]: e.target.value,
    });
  }
  function setImage(e) {
    const data = e.target.files[0];
    setProductImage(data);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();

    const err = [];
    if (err.length > 0) {
      return setAlertData({
        type: "error",
        title: "Error al ingresar producto",
        message: err,
      });
    } else {
      axios
        .post(
          `${API_URL}/products`,
          {
            ...supplieData,
            productImage: productImage ? productImage : null,
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data === "Hay errores en los campos") {
            setAlertData({
              type: "error",
              title: "Error al ingresar producto",
              message: [response.data],
            });
          } else {
            setAlertData({
              type: "done",
              title: "Añadido con exito",
              message: [response.data],
              pathname: "/supplies",
            });
          }
        });
    }
  }

  return !!done ? (
    <Navigate to={"/supplies"} />
  ) : (
    <div className={Styles.container}>
      {/* <Alert
        alertData={alertData}
        reset={() => {
          setAlertData(baseState);
          if (alertData.type === "done") {
            setDone(true);
          }
        }}
      /> */}
      <form
        encType="multipart/form-data"
        className={Styles.createForm}
        id="create-form"
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <input
          type="text"
          name="productBrand"
          id="brandInput"
          placeholder="Marca"
          value={supplieData.productBrand}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="text"
          name="productName"
          id="nameInput"
          placeholder="Producto"
          value={supplieData.productName}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="text"
          name="model"
          id="productModel"
          placeholder="Modelo"
          value={supplieData.model}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="number"
          name="price"
          id="productPrice"
          placeholder="Valor del producto"
          value={supplieData.price}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="number"
          name="code"
          id="codeInput"
          placeholder="Codigo del producto"
          value={supplieData.code}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          onChange={(e) => setImage(e)}
          type="file"
          name="productImg"
          id="productImage"
        />
        {productImage && (
          <div>
            <span>{productImage.name}</span>
            <img
              width={"100px"}
              src={URL.createObjectURL(productImage)}
              alt=""
            />
          </div>
        )}
        <input type="submit" value="Agregar elemento" />
        <input type="reset" value="Limpiar formulario" />
      </form>
    </div>
  );
};

export default CreatesForm;
