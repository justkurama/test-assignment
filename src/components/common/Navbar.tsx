import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logout } from '../../features/authSlice';
import './Navbar.css';

const Navbar = () => {
return (
    <nav className="navbar">
        <Link to="/">
            <h1>Star Wars Explorer</h1>
        </Link>
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
    </nav>
);
};

export default Navbar;
