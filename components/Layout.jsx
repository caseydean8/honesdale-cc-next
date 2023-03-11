import React from "react";
import { Header, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div className="container-sm g-1 max">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
