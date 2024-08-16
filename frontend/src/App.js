import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Navbar from './Navbar';
import Home from './Home';

function App() {
    const [isAuthenticated, setAuth] = useState(!!localStorage.getItem('token'));

    return (
        <Router>
            <Navbar isAuthenticated={isAuthenticated} setAuth={setAuth} />
            <div className="App">
                <Routes>
                    <Route path="/register" element={
                        <PublicRoute>
                            <RegistrationForm />
                        </PublicRoute>
                    } />
                    <Route path="/login" element={
                        <PublicRoute>
                            <LoginForm setAuth={setAuth} />
                        </PublicRoute>
                    } />
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
