import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<DogList />} />
      <Route path="/dogs/:name" element={<DogDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
