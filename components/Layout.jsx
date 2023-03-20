import React from "react";
import { Header, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <div className="container-sm max navbar-clearance">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
