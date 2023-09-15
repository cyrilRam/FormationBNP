import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Creer Eleve</li>
        </NavLink>
        <NavLink to="/histo">
          <li>Liste ELeves</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
