import React from "react";
import RoutesList from "./RoutesList";
import { BrowserRouter } from 'react-router-dom';
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
