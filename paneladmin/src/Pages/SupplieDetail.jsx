import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSupplieById } from "../Redux/actions";
import { Navigate, useParams } from "react-router-dom";
import Styles from "../Styles/dist/Supplies.module.css";
import axios from "axios";
const emptyImg =
  "https://res.cloudinary.com/dwsjvk7zt/image/upload/v1684178978/gpmotos/no_image_icon_kww2n8.jpg";

const SupplieDetail = () => {
  const [done, setDone] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const { details } = store;
  const API_KEY = "http://localhost:3001/products";

  useEffect(
    function () {
      dispatch(getSupplieById(id));
    },
    [dispatch, id]
  );

  async function onDeleteHandler() {
    axios
      .delete(`${API_KEY}/${id}`, {
        withCredentials: true,
      })
      .then(function (response) {
        dispatch(getSupplieById(id));
        setDone(true);
      });
  }

  return !!done ? (
    <Navigate to={"/supplies"} />
  ) : (
    <div className={Styles.container}>
      {typeof details === "object" ? (
        <div className={Styles.supplieDetail}>
          <h2 className={Styles.title}>{details.productName}</h2>
          <img
            src={
              `http://localhost:3001/images/${details.productImage}` || emptyImg
            }
            alt="supplieimg"
          />
          <div className={Styles.infoContainer}>
            <h3 className={Styles.child}>Modelo:</h3>
            <span className={Styles.child}>{details.model}</span>
            <h3 className={Styles.child}>Marca:</h3>
            <span className={Styles.child}>{details.productBrand}</span>
            <h3 className={Styles.child}>Precio:</h3>
            <span className={Styles.child}>
              <strong className={Styles.price}>{details.price}</strong>
            </span>
          </div>
          <div className={Styles.buttonContainer}> 
            <button onClick={() => onDeleteHandler()}>Eliminar producto</button>
            <button onClick={() => onDeleteHandler()}>Editar producto</button>
          </div>
        </div>
      ) : (
        <h2>{`${details}`}</h2>
      )}
    </div>
  );
};

export default SupplieDetail;
