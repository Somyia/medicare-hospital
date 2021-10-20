import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const { services } = useServices();
    return (
        <Container className="py-5" id="services">
            <Row className="mb-5">
                <div className="text-center services-title">
                    <h1>Our Services</h1>
                </div>
            </Row>

            <Row>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;