import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../Styles/dist/SuppliesTable.module.css";
const SuppliesRow = (props) => {
  const supplie = props.data;
  const supplieParse = Object.keys(supplie);
  return (
    <tr>
      {supplieParse &&
        supplieParse?.map((td, index) => {
          if (td === "id") {
            return (
              <td key={index} className={Styles[td]}>
                <Link to={`/supplie/${supplie[td]}`}>Detalles</Link>
              </td>
            );
          } else {
            if (td === "price") {
              return (
                <td key={index} className={`${Styles[td]}`}>
                  ${supplie[td]}
                </td>
              );
            } else {
              return (
                <td key={index} className={`${Styles[td]}`}>
                  {supplie[td]}
                </td>
              );
            }
          }
        })}
    </tr>
  );
};

export default SuppliesRow;
