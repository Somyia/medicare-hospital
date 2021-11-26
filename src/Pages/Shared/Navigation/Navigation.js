import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { isSignUp, user, logOut } = useAuth();
    const activeStyle = {
        backgroundColor: '#55a355',
        color: '#EFFAD3'
    }
    console.log(user)
    return (
        // navigation menu
        <Nav className="ms-auto">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#services">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#doctors">Doctors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#blogs">Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                {
                    user?.uid ? <Nav.Link onClick={logOut} href="/login">LogOut</Nav.Link> : <Nav.Link href="/login">SignUp</Nav.Link>
                }

            </Nav.Item>
        </Nav>
    );
};

export default Navigation;



























