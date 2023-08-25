import React from "react";
import { Link } from "react-router-dom";

/** Displays each dog's name and picture
 * Clicking on their name will redirect to their personal page
 *
 * Props
 * - dogData: Data about the dogs from which name and image are determined
 * TODO: example here too
 *
 * DogFinder -> DogList -> Link
*/
function DogList({ dogData }) {
  return (
    <div>
      {dogData.map(dog => (
        <div key={dog.name}>
          <div>
            <Link to={`/dogs/${dog.name}`}>{dog.name} </Link>
          </div>
          <img src={`/${dog.src}.jpg`}
            alt={dog.name}
            height={200}
            width={200}
          ></img>

        </div>
      ))}
    </div>
  );
}

export default DogList;
