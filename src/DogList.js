import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

/** Displays each dog's name and picture
 * Clicking on their name will redirect to their personal page
*/
function Doglist() {

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

  if (dogData === undefined) {
    <p></p>;
  } else {
    return (
      <div>
        {dogData.map(dog => (
          <div key={dog.name}>
            <div>
              <Link to={`/dogs/${dog.name}`}>{dog.name} </Link>
            </div>
            <img src={process.env.PUBLIC_URL + `${dog.src}.jpg`}
              alt={dog.name}
              height={200}
              width={200}
            ></img>

          </div>
        ))}
      </div>
    );
  }
}

export default Doglist;
