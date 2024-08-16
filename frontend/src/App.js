import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard'; // This is the protected component

function App() {
    const [auth, setAuth] = useState(!!localStorage.getItem('token'));
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/register" component={RegistrationForm} />
                    <Route path="/login">
                        <LoginForm setAuth={setAuth} />
                    </Route>
                    <ProtectedRoute path="/dashboard" component={Dashboard} />
                    <Route path="/" exact>
                        <h1>Welcome to the Home Page</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default App;
