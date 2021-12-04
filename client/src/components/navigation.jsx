import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth.jsx';
import NavEntry from './NavEntry.jsx';
import '../styles/Navigation.css';

const navLinksArr = [
  {
    title: 'Home',
    endpoint: 'home',
  },
  {
    title: 'Categories',
    endpoint: 'category'
  }
]

const Navigation = () => {
  const [navLinks, setNavLinks] = useState(navLinksArr);

  return (
    <div className="nav-container">
      <div className="nav-bar">
        {navLinks.map(({ endpoint, title }) => (
          <NavEntry key={title} endpoint={endpoint} title={title} />
        ))}
        <Auth />
      </div>
      {/* <Link to="/sign_up">Sign Up</Link>
      <Link to="/gameCreation">Create Game</Link>
      <Link to="/gamePage">Game</Link>
      <Link to="/gameOver">Game Over</Link> */}
    </div>
  )
}

export default Navigation;
