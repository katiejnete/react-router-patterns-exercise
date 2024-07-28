import React from "react";
import { Link } from "react-router-dom";

const DogList = ({dogs}) => {
return (
    <>
    <ul>
    {dogs.map(dog => {
        return <li key={dog.name}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
    })}
    </ul>
    </>
);
};

export default DogList;