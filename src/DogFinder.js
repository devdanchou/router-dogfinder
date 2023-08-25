import axios from "axios";
import React, { useState } from "react";
import RoutesList from "./RoutesList";
import Nav from "./Nav";

/** Top level Dog Finder component
 *
 * Props [none]
 *
 * State
 * - dogData: Data about dogs
 *
 * App -> DogFinder -> { Nav, RoutesList }
 */
function DogFinder() {
  console.log("Dogfinder Being Rendered");
  const [dogData, setDogData] = useState(undefined);
  const [selectedDog, setSelectedDog] = useState(undefined);

  console.log("DogFinder selectedDog:", selectedDog);

  if (dogData === undefined) {
    getDogData();
  }

  console.log("dogData:", dogData);

  function setDog(dogName) {
    let dog = dogData.find(d => d.name === dogName);
    setSelectedDog(dog);
  }

  /** Gets and updates dogData */
  async function getDogData() {
    const response = await axios.get('http://localhost:5001/dogs');

    setDogData(response.data);
    console.log("Axios response.data", response.data);
  }

  // TODO: This doesn't need 'else' element
  if (dogData === undefined) {
    return (<p> Loading Dog Data ... </p>);
  } else {
    return (
      <div className="DogFinder">
        <h1>Dog Finder!</h1>
        <Nav dogNames={dogData.map(d => d.name)} setDog={setDog}/>
        <RoutesList dogData={dogData} selectedDog={selectedDog} />
      </div>
    );
  };
}

export default DogFinder;
