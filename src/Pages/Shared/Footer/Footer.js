import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import './Footer.css'

const Footer = () => {
    const { services } = useServices();
    const textColor = {
        color: '#ccc',
    }
    return (
        <div className="bg-dark">
            <Container className="py-5">
                <Row>
                    <div className="col-md-4">
                        <Link to="/home">
                            <div className="logo-text">
                                Medi<span>care</span>
                                <small>Hospital</small>
                            </div>
                        </Link>
                        <br />
                        <small style={textColor}>Medicare Hospital has provided medical and surgical excellence to South Australians for over 80 years. This section features a little about where we’ve come from and where we are going.</small>
                    </div>
                    <div className="col-md-4">
                        <h4 style={textColor}>Services</h4>
                        <ListGroup as="ul" >
                            {
                                services.map(service => <ListGroup.Item as="li" className="bg-dark border-bottom text-light">{service.name}</ListGroup.Item>)
                            }

                        </ListGroup>
                    </div>
                    <div className="col-md-4">
                        <h4 style={textColor}>Contact Us</h4>
                        <div style={textColor} className="mb-3">
                            <FontAwesomeIcon style={textColor} icon={faMapMarkerAlt} /> 350 South Terrace,<br /> Adelaide SA 5000
                    </div>
                        <div className="mb-3">
                            <FontAwesomeIcon style={textColor} icon={faPhoneAlt} /> <Link style={textColor} to="/home">08 1323 3432</Link>
                        </div>
                        <div style={textColor} className="mb-3">
                            <FontAwesomeIcon icon={faEnvelope} /> <Link style={textColor} to="/home">registe@medihos.com</Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;