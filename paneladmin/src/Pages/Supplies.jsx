import React from "react";
import SearchSupplies from "../Components/SearchSupplies/SearchSupplies";
import SuppliesTable from "../Components/SuppliesTable/SuppliesTable";
import Styles from "../Styles/dist/Supplies.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading/Loading";

const Supplies = () => {
  const store = useSelector((store) => store);
  const { supplies } = store;

  const returnIfFilled = () => (
    <div className={Styles.container}>
      <div className={Styles.utilBar}>
        <Link className={Styles.addBtn} to={"/createsupplie"}>
          Agregar un elemento
        </Link>
        <SearchSupplies />
      </div>

      <SuppliesTable />
    </div>
  );

  const returnIfEmpty = function () {
    return (
      <div className={Styles.empty}>
        <h2>{supplies}</h2>

        <Link
          className={`${Styles.addBtn} ${Styles.aloneCreate}`}
          to={"/createsupplie"}
        >
          Agregar un elemento
        </Link>
      </div>
    );
  };

  return Array.isArray(supplies) ? (
    supplies.length === 0 ? (
      <Loading />
    ) : (
      returnIfFilled()
    )
  ) : (
    returnIfEmpty()
  );
};

export default Supplies;
