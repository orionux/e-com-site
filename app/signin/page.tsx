"use client";

import React, { useState, useEffect } from 'react';

const SignIn = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState({ email: '', password: '' });
    const [apiError, setApiError] = useState('');

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem('authToken');
            if (token) {
                window.location.href = '/dashboard';
            }
        }
    }, []);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError({ ...error, [name]: '' });
    };

    const validateForm = () => {
        let valid = true;
        let newError = { email: '', password: '' };

        if (!formData.email) {
            newError.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newError.email = 'Email address is invalid';
            valid = false;
        }

        if (!formData.password) {
            newError.password = 'Password is required';
            valid = false;
        }

        setError(newError);
        return valid;
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
        if (!validateForm()) {
            return;
        }
    
        const formDataToSend = new FormData();
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);
    
        try {
            const response = await fetch('https://orionuxerp.store/api/v1/login', {
                method: 'POST',
                body: formDataToSend,
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
    
                if (typeof window !== "undefined") {
                    const customerId = data.user.id;
                    const customerName = data.user.customer_details.customer_name;
    
                    localStorage.setItem('customer_id', customerId.toString());
                    localStorage.setItem('customer_name', customerName);
    
                    const tempToken = Math.random().toString(36).substr(2);
                    localStorage.setItem('authToken', tempToken);
    
                    setApiError('');
                    window.location.href = '/dashboard'; 
                }
            } else {
                const errorMessage = await response.text();
                setApiError(`Login failed: ${errorMessage}`);
                console.error('Login error:', errorMessage);
            }
        } catch (error) {
            setApiError(`Login failed: ${error}`);
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div className="register-area ptb-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-12 col-lg-6 col-xl-6 ms-auto me-auto">
                            <div className="login">
                                <div className="login-form-container">
                                    <div className="login-form">
                                        <form onSubmit={handleSubmit}>
                                            <h2 className="text-center"><span>Log in</span></h2>

                                            <input
                                                type="text"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                style={{ border: error.email ? '1px solid red' : '' }}
                                            />
                                            {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                style={{ border: error.password ? '1px solid red' : '' }}
                                            />
                                            {error.password && <p style={{ color: 'red' }}>{error.password}</p>}

                                            <div className="button-box">
                                                <div className="login-toggle-btn">
                                                    <input type="checkbox" />
                                                    <label>Remember me</label>
                                                    <a href="#">Forgot Password?</a>
                                                </div>
                                                <button type="submit" className="default-btn floatright">Login</button>
                                            </div>

                                            {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
