import React, { useState } from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <div>
      Maak hier jouw prachtige blog-applicatie!
    </div>
  );
}

export default App;