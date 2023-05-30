import React from "react";
import Styles from "../../Styles/dist/SuppliesTable.module.css";
import { useSelector } from "react-redux";
import SuppliesRow from "./SuppliesRow";
const SuppliesTable = () => {
  const store = useSelector((store) => store);
  const { supplies } = store;

  return (
    <div className={Styles.container}>
      <table className={Styles.sTable}>
        <thead>
          <tr>
            <th>Cód</th>
            <th>Elemento</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Precio</th>
            <th>{"_"}</th>
          </tr>
        </thead>
        <tbody>
          {
            
            supplies && Array.isArray(supplies) && supplies?.map(supplie=>{
              return <SuppliesRow key={supplie.id} data={supplie}/>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default SuppliesTable;
