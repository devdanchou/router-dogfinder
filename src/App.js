import React from "react";
import RoutesList from "./RoutesList";
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";

const mockDogNames = ['Pluto', 'Goofy']

function App() {
  return (
    <div className="App">
      <h1>Dog Finder!</h1>
      <BrowserRouter>
        <Nav dogNames={mockDogNames} />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
