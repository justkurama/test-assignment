import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/common/PrivateRoute';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import EntityList from './components/EntityList';
import EntityDetail from './components/EntityDetail';

function App() {

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:entity" element={<PrivateRoute isAuthenticated={isAuthenticated}><EntityList /></PrivateRoute>} />
        <Route path="/:entity/:id" element={<PrivateRoute isAuthenticated={isAuthenticated}><EntityDetail /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
