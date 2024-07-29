import React from "react";
import { Link, useParams } from "react-router-dom";

const DogDetails = ({ dog }) => {
  const dogInfo = Object.entries(dog);

  return (
    <>
      <ul>
        {dogInfo.map((info) => (
          <li key={info[0]}>
            {info[0]}: {info[1]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DogDetails;
