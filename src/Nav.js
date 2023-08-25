import React from "react";
import { NavLink } from "react-router-dom";

/** Displays a navbar with links to all the dogs
 * Prop:
 * - dogNames: a list of dog's names e.g ['name', ...]
 *
 * App => Nav -> NavLink
 */
function Nav({ dogNames, setDog }) {
  let activeStyle = {
    fontWeight: "bold",
  };

  function handleClick(evt) {
    console.log("evt.target.id", evt.target.id);
    setDog(evt.target.id);
  }

  // TODO: Best practice to add class name to parent div
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to={`/dogs`}
            style={({ isActive }) => isActive ? activeStyle : undefined }
            end>
              {`Home`}
          </NavLink>
        </li>
        {dogNames.map(dogName => (
          // TODO: update to match above formatting of code
          <li key={dogName} >
            <NavLink
              to={`/dogs/${dogName}`}
              style={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={handleClick}
              id={dogName}
            >
              {`${dogName}`}
            </NavLink>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default Nav;