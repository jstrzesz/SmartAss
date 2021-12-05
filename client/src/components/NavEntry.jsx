import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown.jsx';

const options = [
  'Dr. No',
  'From Russia with Love',
  'Goldfinger'
]

const NavEntry = ({ endpoint, title }) => {
  const [hover, setHover] = useState(false);
  
  const toggleHover = () => {
    setHover(!hover);
  }

  return (
    <div 
      className="nav-link"
      onMouseEnter={() => toggleHover()}
      // onMouseLeave={() => toggleHover()}
    >
      <Link to={`${endpoint}`}>{title}</Link>
      {hover ? title !== 'Home' ? <Dropdown options={options} /> : null : null}
      {/* <Link to={`/${endpoint}`}>{title}</Link> */}
    </div>
  );
}

export default NavEntry;
