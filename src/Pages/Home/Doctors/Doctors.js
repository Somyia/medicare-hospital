import React from 'react';
import './Doctors.css';
import { Container, Row } from 'react-bootstrap';
import doctor1 from '../../../images/doctors/doctor-1.jpg';
import doctor2 from '../../../images/doctors/doctor-2.jpg';
import doctor3 from '../../../images/doctors/doctor-3.jpg';

const Doctors = () => {
    return (
        <Container className="py-5" id="doctors">
            <Row>
                <div className="text-center services-title">
                    <h1>Our Doctors</h1>
                </div>

            </Row>
            <Row>
                <div className="col-md-4">
                    <div className="single-doctor">
                        <img className="rounded-circle doctor-img" src={doctor1} alt="" />
                    </div>
                    <div className="bg-primary text-white text-center">
                        <h4>Maria Angel</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-doctor">
                        <img className="rounded-circle doctor-img" src={doctor2} alt="" />
                    </div>
                    <div className="bg-primary text-white text-center">
                        <h4>Nathan Mullins</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-doctor">
                        <img className="rounded-circle doctor-img" src={doctor3} alt="" />
                    </div>
                    <div className="bg-primary text-white text-center">
                        <h4>Caroline Grant</h4>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Doctors;