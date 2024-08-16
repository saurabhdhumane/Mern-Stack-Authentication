import React from 'react';

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2>Welcome to the MERN Authentication Project</h2>
                        </div>
                        <div className="card-body">
                            <h3>About This Project</h3>
                            <p>
                                This project is a demonstration of a basic MERN (MongoDB, Express, React, Node.js) stack application
                                featuring JWT-based authentication and route protection. The application is designed with modern web
                                development practices, ensuring secure and seamless user experiences.
                            </p>

                            <h3>Features</h3>
                            <ul className="list-group mb-3">
                                <li className="list-group-item">User Registration</li>
                                <li className="list-group-item">User Login</li>
                                <li className="list-group-item">JWT Token-Based Authentication</li>
                                <li className="list-group-item">Protected Routes for Authenticated Users</li>
                                <li className="list-group-item">Prevents Access to Login and Register Pages Once Logged In</li>
                            </ul>

                            <h3>Technologies Used</h3>
                            <ul className="list-group mb-3">
                                <li className="list-group-item"><strong>Frontend:</strong> React, Bootstrap, React Router v6</li>
                                <li className="list-group-item"><strong>Backend:</strong> Node.js, Express.js, MongoDB</li>
                                <li className="list-group-item"><strong>Authentication:</strong> JWT (JSON Web Tokens)</li>
                            </ul>

                            <h3>How It Works</h3>
                            <p>
                                The application provides a seamless authentication flow:
                            </p>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item">
                                    Register: Users can sign up with their email and password, which are securely stored in MongoDB.
                                </li>
                                <li className="list-group-item">
                                    Login: Users authenticate using their email and password, receiving a JWT token on successful login.
                                </li>
                                <li className="list-group-item">
                                    Protected Routes: Certain pages, like the dashboard, are accessible only to authenticated users. The JWT token is used to verify access.
                                </li>
                                <li className="list-group-item">
                                    Public Routes: Once logged in, users cannot access the login or registration pages and are redirected to the dashboard.
                                </li>
                                <li className="list-group-item">
                                    Logout: Users can log out, which clears the JWT token from local storage, restricting access to protected routes.
                                </li>
                            </ol>

                            <h3>Project Structure</h3>
                            <p>
                                The project is organized into frontend and backend directories, each containing all the necessary components and routes to support the application's functionality.
                            </p>
                            <ul className="list-group mb-3">
                                <li className="list-group-item"><strong>Backend:</strong> Handles authentication, JWT generation, and route protection.</li>
                                <li className="list-group-item"><strong>Frontend:</strong> Manages user interaction, routing, and displays based on authentication status.</li>
                            </ul>

                            <h3>Get Started</h3>
                            <p>
                                To explore the project, navigate through the application using the provided links in the navigation bar. If you're new to the app, start by registering a new account or logging in if you already have credentials.
                            </p>

                            <div className="text-center mt-4">
                                <a href="/register" className="btn btn-success me-2">Register</a>
                                <a href="/login" className="btn btn-primary">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
};

export default Home;
