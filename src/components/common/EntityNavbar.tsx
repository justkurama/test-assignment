import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const EntityNavbar = () => {
  return (
    <ul className="navbar-links">
      <li>
        <Link to="/people">People</Link>
      </li>
      <li>
        <Link to="/films">Films</Link>
      </li>
      <li>
        <Link to="/vehicles">Vehicles</Link>
      </li>
      <li>
        <Link to="/planets">Planets</Link>
      </li>
      <li>
        <Link to="/species">Species</Link>
      </li>
      <li>
        <Link to="/starships">Starships</Link>
      </li>
    </ul>
  );
};

export default EntityNavbar;