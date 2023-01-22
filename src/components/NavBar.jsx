import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="flex-nav">
      <Link to="/" className="links">
        <h1>FFA</h1>
      </Link>
      <Link to="/comidachina" className="links">
        <h3>Comida China</h3>
      </Link>
      <Link to="/comidajaponesa" className="links">
        <h3>Comida Japonesa</h3>
      </Link>
      <Link to="/comidacoreana" className="links">
        <h3>Comida Coreana</h3>
      </Link>
      <CartWidget />
    </div>
  );
};

export default NavBar;
