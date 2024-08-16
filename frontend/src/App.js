import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Dashboard from './Dashboard';

function App() {
    const [auth, setAuth] = useState(!!localStorage.getItem('token'));

    return (
        <Router>
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
                    <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
