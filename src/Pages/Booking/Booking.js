import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { serviceName } = useParams();
    console.log(serviceName)
    return (
        <div className="booking-area">
            <div className="overlay">
                <Container>
                    <Row>
                        <div className="text-center my-5 text-white">
                            <h1>Booking your Service</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className="booking-form mb-5">
                            <Form>
                                <Row>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder="Your Name" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="number" placeholder="Your Phone" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="email" placeholder="Your Email" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder="Your Address" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="date" placeholder="Booking Date" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text"
                                                value={serviceName} placeholder="Service" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-12">
                                        <Form.Group className="mb-3">
                                            <Form.Control as="textarea" placeholder="Your Message" />
                                        </Form.Group>
                                    </div>
                                </Row>

                                <Button variant="primary" size="lg" type="submit">
                                    Book Now
                                </Button>
                            </Form>
                        </div>

                    </Row>
                </Container>
            </div>
        </div>
        //         <div>
        //             <div>
        //                 <form action="#" method="post">
        //                     <div class="row">
        //                         <div class="col-md-6">
        //                             <div class="form-group mb-30">
        //                                 <input type="text" name="your-name" class="form-control" placeholder="Your Name" required="">
        // </div>
        //                             </div>
        //                             <div class="col-md-6">
        //                                 <div class="form-group mb-30">
        //                                     <input type="text" name="your-phone" class="form-control" placeholder="Your Phone" required="">
        // </div>
        //                                 </div>
        //                                 <div class="col-md-6">
        //                                     <div class="form-group mb-30">
        //                                         <input type="email" name="your-email" class="form-control" placeholder="Your Email" required="">
        // </div>
        //                                     </div>
        //                                     <div class="col-md-6">
        //                                         <div class="form-group mb-30">
        //                                             <input type="text" name="your-address" class="form-control" placeholder="Your Address">
        // </div>
        //                                         </div>
        //                                         <div class="col-md-6">
        //                                             <div class="form-group mb-30">
        //                                                 <select name="your-scheldule" class="form-control">
        //                                                     <option value="Choose Your Scheldule">Choose Your Scheldule</option>
        //                                                     <option value="9 AM to 10 AM">9 AM to 10 AM</option>
        //                                                     <option value="11 AM to 12 PM">11 AM to 12 PM</option>
        //                                                     <option value="2 PM to 4 PM">2 PM to 4 PM</option>
        //                                                     <option value="8 PM to 10 PM">8 PM to 10 PM</option>
        //                                                 </select>
        //                                             </div>
        //                                         </div>
        //                                         <div class="col-md-6">
        //                                             <div class="form-group mb-30">
        //                                                 <select name="your-time" class="form-control">
        //                                                     <option value="Choose Your Time">Choose Your Scheldule</option>
        //                                                     <option value="9 AM to 10 AM">9 AM to 10 AM</option>
        //                                                     <option value="11 AM to 12 PM">11 AM to 12 PM</option>
        //                                                     <option value="2 PM to 4 PM">2 PM to 4 PM</option>
        //                                                     <option value="8 PM to 10 PM">8 PM to 10 PM</option>
        //                                                 </select>
        //                                             </div>
        //                                         </div>
        //                                         <div class="col-12">
        //                                             <div class="form-group mb-30">
        //                                                 <textarea name="your-message" class="form-control" placeholder="Your Message"></textarea>
        //                                             </div>
        //                                         </div>
        //                                         <div class="col-12 text-center">
        //                                             <button type="submit" class="btn dento-btn">Booking Now</button>
        //                                         </div>
        //                                     </div>
        // </form>
        //                             </div>
        //                         </div>
    );
};

export default Booking;