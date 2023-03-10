import React from "react";
import { Header, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
