import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, desc, img } = props.service;
    const history = useHistory();
    const handleViewMore = (id) => {
        history.push(`/serviceDetail/${id}`)
    }

    return (
        //single service area
        <div className="col-md-6 mb-4">
            <Card className="service-item">
                <div className="service-img-box">
                    <Card.Img src={img} className="service-img" />
                </div>
                <div>
                    <Card.Body className="service-info">
                        <Card.Title className="service-name">{name}</Card.Title>
                        <Card.Text>
                            {desc.slice(0, 60)}
                        </Card.Text>
                        <Button onClick={() => handleViewMore(id)} className="service-btn" variant="primary">View Details</Button>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default Service;