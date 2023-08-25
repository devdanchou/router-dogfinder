import React from "react";
import { useParams } from "react-router-dom";

/** Displays the details of a dog including name, photo, age and some facts
 *
 * Params:
 * - dogData: Data about all dogs
 *
 * DogList / Nav -> [Link] -> DogDetails
*/
function DogDetails({ dogData }) {
  const { name } = useParams();
  const thisDog = dogData.filter(d => d.name === name)[0];
  // TODO: could use .find() for above since it's only ever 1

  return (
    <div>
      <p>Name: {thisDog.name}</p>
      <img src={`/${thisDog.src}.jpg`}
        alt={thisDog.name}
        height={200}
        width={200}
      />
      <p>Age: {thisDog.age}</p>
      <p>Facts:</p>
      <ul>
        {thisDog.facts.map((f, idx) => (
          <li key={idx}>
            <p>{f}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
