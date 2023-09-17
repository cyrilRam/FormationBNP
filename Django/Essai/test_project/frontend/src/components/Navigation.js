import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Creer Eleve</li>
        </NavLink>
        <NavLink
          to="/histo"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Liste Eleves</li>
        </NavLink>
      </ul>
      <h1>Application Gestion Eleves</h1>
    </div>
  );
};

export default Navigation;
