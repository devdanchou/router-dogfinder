import React from "react";
import { BrowserRouter } from 'react-router-dom';
import DogFinder from "./DogFinder";

/** Top level app container. Holds BrowserRouter and renders DogFinder */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DogFinder />
      </BrowserRouter>
    </div>
  );
}

export default App;
