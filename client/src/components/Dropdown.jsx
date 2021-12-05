import React from 'react';

const Dropdown = ({ options }) => {
  console.log(options);
  return (
  <div className="nav-dropdown">
    <ul className="options-list">
      {options.map(option => (<li key={option}>{option}</li>))}
    </ul>
  </div>
)}

export default Dropdown;
