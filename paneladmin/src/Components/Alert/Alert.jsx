import React, { useState, useEffect } from "react";
export const baseState = {
  type: "",
  title: "",
  message: [],
};

const Alert = (props) => {
  console.log(props);
  const { alertData, reset } = props;
  const { type, title, message } = alertData;
  const [alertColor, setAlertColor] = useState("");
  const [alertColorBackground, setAlertColorBackground] = useState("");

  useEffect(
    function () {
      if (type === "error") {
        setAlertColor("red");
        setAlertColorBackground("#ff605d8c");
      } else if (type === "info") {
        setAlertColor("darkorange");
        setAlertColorBackground("#FFAD298C");
      } else if (type === "done") {
        setAlertColor("limegreen");
        setAlertColorBackground("#6BFF2B8C");
      }
    },
    [setAlertColor, type]
  );

  return !title ? null : (
    <div
      style={{ backgroundColor: `${alertColorBackground}` }}
      className={"mainalert"}
    >
      <div className="alertContainer">
        <div className="alertHeader">
          <h2 style={{ textShadow: `1px 1px white`, color: `${alertColor}` }}>
            {title || ""}
          </h2>
          <button onClick={() => reset()}>X</button>
        </div>
        <div className="alertBody">
          <ul>
            {message &&
              Array.isArray(message) &&
              message?.map(function (err, idx) {
                return <li key={idx}>{err}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Alert;
