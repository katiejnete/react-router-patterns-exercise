import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Color.css";

const Color = ({ color }) => {
  const { colorName, colorValue } = color;
  return (
    <div
      className="color"
      style={{
        "--color-bg-color": colorValue,
      }}
    >
      <h1>{colorName}</h1>
    </div>
  );
};

export default Color;
