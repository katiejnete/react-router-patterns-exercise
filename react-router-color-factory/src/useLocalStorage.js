import { useState, useEffect } from "react";

const useLocalStorage = () => {
  const INITIAL_STATE = [
    { colorName: "red", colorValue: "#ff0000" },
    { colorName: "green", colorValue: "#00ff00" },
    { colorName: "blue", colorValue: "#0000ff" },
  ];
  const [colors, setColors] = useState(() => {
    const storedColors = window.localStorage.getItem("colors");
    return storedColors ? JSON.parse(storedColors) : INITIAL_STATE;
  });
  useEffect(() => {
    window.localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);
  const addColor = (color) => {
    const newColor = { ...color };
    setColors((colors) => [newColor, ...colors]);
  };

  return [colors, addColor];
};

export default useLocalStorage;
