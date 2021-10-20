import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { isSignUp, setIsSignUp, user, setUser, updateUser, setEmail, setName, setPassword, email, password, loginWithGoogle, loginWithEmailPassword, createAccout
    } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleNamelField = e => {
        setName(e.target.value);
    }
    const handleEmailField = e => {
        setEmail(e.target.value)
    }

    const handlePasswordField = e => {
        setPassword(e.target.value);
    }

    const handleToggleSignIn = () => {
        setIsSignUp(true);
    }
    const handleToggleSignUp = () => {
        setIsSignUp(false);
    }

    const handleSignIn = () => {
        loginWithEmailPassword(email, password)
            .then(result => {
                history.push(redirect_url);
            })

    }

    const handleSignUp = () => {
        createAccout(email, password)
            .then(result => {
                updateUser()
                setUser(result.user)
                history.push(redirect_url)
            })
    }

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        isSignUp ? handleSignIn() : handleSignUp();
    }

    return (
        <Container className="py-5">
            <Row>
                <div className="d-flex align-items-center w-75 mx-auto gap-4 login-area">
                    <div className="text-center">
                        <h3>Welcome to our hospital</h3>
                        <h6>For getting services from our hospital you need to {isSignUp ? 'sign in' : 'sign up'}</h6>
                    </div>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                {!isSignUp && <div className="col-md-12">
                                    <Form.Group className="mb-3">
                                        <Form.Control onBlur={handleNamelField} type="text" placeholder="Your Name" />
                                    </Form.Group>
                                </div>}
                                <div className="col-md-12">
                                    <Form.Group className="mb-3">
                                        <Form.Control onBlur={handleEmailField} type="email" placeholder="Your Email" />
                                    </Form.Group>
                                </div>
                                <div className="col-md-12">
                                    <Form.Group className="mb-3">
                                        <Form.Control onBlur={handlePasswordField} type="password" placeholder="Your Password" />
                                    </Form.Group>
                                </div>

                            </Row>
                            {isSignUp ? <p>New User? <Button onClick={handleToggleSignUp}>SignUp</Button></p> : <p>Already have an accout? <Button onClick={handleToggleSignIn}>SignIn</Button></p>}

                            {isSignUp ? <Button className="service-btn" variant="primary" size="lg" type="submit">
                                Sign In
                            </Button>
                                :
                                <Button className="service-btn" variant="primary" size="lg" type="submit">
                                    Sign Up
                            </Button>}

                        </Form>
                        <hr className="my-4" />
                        <Button onClick={handleGoogleSignIn} className="service-btn" variant="primary" size="lg" type="submit">
                            Sign in with Google
                            </Button>
                    </div>
                </div>
            </Row>
        </Container >
    );
};

export default Login;