import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import GameCreation from './gameCreation.jsx';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create" element={<GameCreation />} />
    </Routes>
  </div>
)

export default App;
