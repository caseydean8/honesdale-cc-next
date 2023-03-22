import React from "react";
import { Header, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="container-sm navbar-clearance">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
