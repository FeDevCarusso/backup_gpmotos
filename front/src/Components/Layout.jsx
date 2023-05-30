import React from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation().pathname;
  const homeLayout = (
    <div className="layout">
      <div>{children[0]}</div>
      <div>{children[1]}</div>
    </div>
  );
  const baseLayout = children;
  return location === "/" ? homeLayout : baseLayout;
};

export default Layout;
