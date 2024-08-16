import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000; // Current time in seconds
            if (decodedToken.exp > currentTime) {
                return children;
            } else {
                localStorage.removeItem('token'); // Token expired, remove it
            }
        } catch (error) {
            console.error('Invalid token:', error);
        }
    }

    return <Navigate to="/login" />;
};

export default ProtectedRoute;
