import "./App.css";
import React from "react";
import Nav from "./Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import dogData from "./dogData";

function App() {
  const { dogs } = dogData;

  return (
    <>
      <Nav dogs={dogs} />
      <Routes>
        <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
        {dogs.map((dog) => (
          <Route
            key={dog.name}
            path={`/dogs/${dog.name}`}
            element={<DogDetails dog={dog} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </>
  );
}

export default App;
