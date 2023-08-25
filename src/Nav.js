import React from "react";
import { NavLink } from "react-router-dom";

/** Displays a navbar with links to all the dogs
 * Prop:
 * - dogNames: a list of dog's names e.g ['name', ...]
 *
 * App => Nav -> NavLink
 */
function Nav({ dogNames }) {
  let activeStyle = {
    fontWeight: "bold",
  };

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
          <li key={dogName} ><NavLink to={`/dogs/${dogName}`}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>{`${dogName}`}</NavLink>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default Nav;