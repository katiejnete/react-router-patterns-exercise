import React from "react";
import { NavLink } from "react-router-dom";

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
