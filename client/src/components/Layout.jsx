import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Navbar />
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
