import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import '../App.css';
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
      <Route>
        <p>My app goes here</p>
        <Home />
      </Route>

    </BrowserRouter>
  );
}

export default App;
