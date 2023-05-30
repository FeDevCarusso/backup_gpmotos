import React from "react";
import Styles from "../../../Styles/dist/CardContainer.module.css";
import Card from "../../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllRepuestos } from "../../../Redux/actions";
import { useEffect } from "react";
import { socket } from "../../../config/socket";
const CardContainer = () => {
  const store = useSelector((store) => store);
  const { repuestos } = store;
  const dispatch = useDispatch();

  useEffect(function() {
    socket.on("addProduct", function(){
      dispatch(getAllRepuestos())
    })
  })

  return (
    <div className={Styles.cards}>
      {repuestos &&
        Array.isArray(repuestos) &&
        repuestos?.map(function (repuesto) {
          return typeof repuesto === "string" ? (
            <h3 key={Date.now()}>{repuesto}</h3>
          ) : (
            <Card key={repuesto.id} repuesto={repuesto} />
          );
        })}
    </div>
  );
};

export default CardContainer;
