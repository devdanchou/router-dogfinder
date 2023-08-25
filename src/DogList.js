import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

/** Displays a list of links to view items in the vending machine */
function Doglist() {

  // setDogData() allows us to set the value of 'dogData' AND forces re-render
  const [dogData, setDogData] = useState(undefined);

  if (dogData === undefined) {
    getDogData();
  }

  console.log("dogData:", dogData);

  async function getDogData() {
    const response = await axios.get('http://localhost:5001/dogs');
    // any lines below here will not run until the above line gets real data
    setDogData(response.data);
    console.log("Axios response.data", response.data);
  }

  if (dogData === undefined) {
    <p></p>
  } else {
    return (
      <div>
        { dogData.map( dog => (
        <div key={dog.name}>
          <p>{dog.name}</p>
          <p>{dog.age}</p>
          <p>{dog.src}</p>
          <p>{dog.fact}</p>
        </div>
      )) }
      </div>
    );
  }
}

export default Doglist;
