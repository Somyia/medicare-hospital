import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const { services } = useServices();
    const clickedService = services.find(service => service.id == serviceId);
    console.log(clickedService)

    const history = useHistory();

    const handleBooking = (name) => {
        history.push(`/booking/${name}`);
    }
    return (
        <Container>
            <Row>
                <Card className="w-75 mx-auto">
                    <Card.Img variant="top" src={clickedService?.img} />
                    <Card.Body>
                        <Card.Title>{clickedService?.name}</Card.Title>
                        <Card.Text>
                            {clickedService?.desc}
                        </Card.Text>

                        <Button onClick={() => handleBooking(clickedService?.name)} className="btn-hover" variant="primary">Booking Service</Button>

                    </Card.Body>
                </Card>
            </Row>
        </Container >
    );
};

export default ServiceDetails;