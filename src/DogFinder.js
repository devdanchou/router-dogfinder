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
  const [dogData, setDogData] = useState(undefined);

  if (dogData === undefined) {
    getDogData();
  }

  console.log("dogData:", dogData);

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
        <Nav dogNames={dogData.map(d => d.name)} />
        <RoutesList dogData={dogData} />
      </div>
    );
  };
}

export default DogFinder;
