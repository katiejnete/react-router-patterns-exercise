import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

function App() {
  const INITIAL_STATE = [{colorName: "red", colorValue: "#ff0000"},{colorName: "green", colorValue: "#00ff00"},{colorName: "blue", colorValue: "#0000ff"}];
  const [colors, setColors] = useState(() => {
    const storedColors = window.localStorage.getItem("colors");
    return storedColors ? JSON.parse(storedColors) : INITIAL_STATE;
  })
  useEffect(() => {
    window.localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);
  const addColor = (color) => {
    const newColor = {...color};
    setColors((colors) => [newColor, ...colors]);
  }
  return (
    <>
      <Routes>
        <Route exact path="/colors" element={<ColorList colors={colors} />} />
        {colors.map((color) => (
          <Route
            key={color.colorName}
            path={`/colors/${color.colorName}`}
            element={<Color color={color} />}
          />
        ))}
        <Route exact path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </>
  );
}

export default App;
