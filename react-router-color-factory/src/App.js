import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [colors, addColor] = useLocalStorage();

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
        <Route
          exact
          path="/colors/new"
          element={<NewColorForm addColor={addColor} />}
        />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </>
  );
}

export default App;
