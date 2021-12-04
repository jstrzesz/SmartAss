import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import GameCreation from './gameCreation.jsx';
import Navigation from './Navigation.jsx';
import '../styles/App.css';

const App = () => (
  <div className="main-container">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create" element={<GameCreation />} />
    </Routes>
  </div>
)

export default App;
