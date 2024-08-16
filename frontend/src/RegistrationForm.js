// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigation = useNavigate()


    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', formData);
            alert('User registered successfully');
            navigation('/login')

        } catch (error) {
            console.error(error);
            setError(error)
        }
    };

    return (

        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Register</h3>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username" value={formData.username} onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email" value={formData.email} onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password" value={formData.password} onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
