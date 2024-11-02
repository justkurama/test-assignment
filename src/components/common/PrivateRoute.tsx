import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children }: { isAuthenticated: boolean, children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;