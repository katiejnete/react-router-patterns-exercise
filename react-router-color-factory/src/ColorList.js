import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <>
      <h1>Color Factory</h1>
      <Link to={"/colors/new"}>Add color</Link>
      <ul>
        {colors.map((color) => {
          return (
            <li key={color.colorName}>
              <Link to={`/colors/${color.colorName}`}>{color.colorName}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ColorList;
