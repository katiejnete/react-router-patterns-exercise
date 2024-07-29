import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ dogs }) => {
  return (
    <nav>
      {dogs.map((dog) => {
        return (
          <NavLink
            key={dog.name}
            to={`/dogs/${dog.name}`}
          >{dog.name}</NavLink>
        );
      })}
    </nav>
  );
};

export default Nav;
