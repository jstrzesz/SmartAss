import React from 'react';

const Dropdown = ({ options }) => (
  <div className="nav-dropdown">
    <ul className="options-list">
      {options.map(option => (<li key={option.title}>{options.title}</li>))}
    </ul>
  </div>
)

export default Dropdown;
