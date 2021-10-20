import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import logo from '../../../images/logo.png';
import './Header.css';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user } = useAuth();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <div className="logo">
                        <div>
                            <Image src={logo}></Image>
                        </div>

                        <div className="logo-text">
                            Medi<span>care</span>
                            <small>Hospital</small>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navigation></Navigation>
                    <Navbar.Text>
                        {user && <a href="#login">{user.displayName}</a>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;