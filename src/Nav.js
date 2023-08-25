import React from "react";
import { NavLink } from "react-router-dom";

/** Displays a navbar with links to all the dogs
 * Prop:
 * - dogNames: a list of dogs' names
 *
 * App.js => Nav.js
 */
function Nav({ dogNames }) {
  let activeStyle = {
    fontWeight: "bold",
  };

  return (
    <div>
      <ul>
        {dogNames.map(dogName => (
          <li><NavLink to={`/dogs/${dogName}`}
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