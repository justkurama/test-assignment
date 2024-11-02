import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import PeoplePage from './pages/entities/PeoplePage';
import FilmPage from './pages/entities/FilmPage';
import VehiclePage from './pages/entities/VehiclePage';
import PlanetPage from './pages/entities/PlanetPage';
import SpeciesPage from './pages/entities/SpeciesPage';
import StarshipPage from './pages/entities/StarshipPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/common/PrivateRoute';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/people" element={<PrivateRoute isAuthenticated={isAuthenticated}><PeoplePage /></PrivateRoute>} />
        <Route path="/films" element={<PrivateRoute isAuthenticated={isAuthenticated}><FilmPage /></PrivateRoute>} />
        <Route path="/vehicles" element={<PrivateRoute isAuthenticated={isAuthenticated}><VehiclePage /></PrivateRoute>} />
        <Route path="/planets" element={<PrivateRoute isAuthenticated={isAuthenticated}><PlanetPage /></PrivateRoute>} />
        <Route path="/species" element={<PrivateRoute isAuthenticated={isAuthenticated}><SpeciesPage /></PrivateRoute>} />
        <Route path="/starships" element={<PrivateRoute isAuthenticated={isAuthenticated}><StarshipPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
