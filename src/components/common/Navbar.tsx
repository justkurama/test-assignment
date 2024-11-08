import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logout } from '../../features/authSlice';
import '../../styles/Navbar.css';
import EntityNavbar from './EntityNavbar';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Star Wars Explorer</h1>
      </Link>
      <EntityNavbar />
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;