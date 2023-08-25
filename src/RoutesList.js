import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/** Component for managing all routes
 *
 * Props:
 * - dogData: Data about dogs
 *
 * DogFinder -> RoutesList -> { Routes [Route] }
*/
function RoutesList({ dogData }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogData={dogData} />} />
      <Route path="/dogs/:name" element={<DogDetails dogData={dogData} />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RoutesList;
