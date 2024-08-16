// ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token');

    let isAuthenticated = false;
    if (token) {
        try {
            const decodedToken = jwt_decode(token);
            const currentTime = Date.now() / 1000; // Current time in seconds
            if (decodedToken.exp > currentTime) {
                isAuthenticated = true;
            } else {
                localStorage.removeItem('token'); // Token expired, remove it
            }
        } catch (error) {
            console.error('Invalid token:', error);
        }
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default ProtectedRoute;
