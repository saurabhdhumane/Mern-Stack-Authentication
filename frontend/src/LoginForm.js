// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setAuth }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigation = useNavigate()

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            setAuth(true);
            navigation('/dashboard')
        } catch (error) {
            setError('Invalid email or password');
            console.error(error);
        }
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3>Login</h3>
                            </div>
                            <div className="card-body">
                                {error && <div className="alert alert-danger">{error}</div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Email address</label>
                                        <input
                                            type="email"
                                            name='email'
                                            className="form-control"
                                            value={formData.email} onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name='password'
                                            className="form-control"
                                            value={formData.password} onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default LoginForm;
