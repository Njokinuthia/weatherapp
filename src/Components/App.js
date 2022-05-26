import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import '../App.css';
import Home from "./Home"

function App() {
  return (
    
    <BrowserRouter>
      <Route>       
        <Home />
      </Route>

    </BrowserRouter>
  );
}

export default App;
