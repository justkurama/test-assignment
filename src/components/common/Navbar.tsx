import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
return (
    <nav className="navbar">
        <h1>Star Wars Explorer</h1>
        <ul className="navbar-links">
            <li>
                <Link to="/">Home</Link>
            </li>
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
    </nav>
);
};

export default Navbar;
