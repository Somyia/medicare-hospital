import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import blog1 from '../../../images/blogs/blog-1.jpg';
import blog2 from '../../../images/blogs/blog-2.jpg';
import blog3 from '../../../images/blogs/blog-3.png';

const Blogs = () => {
    return (
        <Container className="py-5" id="blogs">
            <Row className="mb-5">
                <div className="text-center services-title">
                    <h1>Our Blogs</h1>
                </div>
            </Row>

            <Row>
                <div className="col-md-4">
                    <div>
                        <img className="img-fluid" src={blog1} alt="" />
                    </div>
                    <div>
                        <small className="text-muted">16 October, 2021</small>
                        <h4 className="text-primary">Gastric Sleeve Surgery</h4>
                        <p>Gastric Sleeve Surgery- How does it work? One of the increasingly popular ways of tackling obesity is bariatric surgery.</p>
                        <Button variant="primary">Read More</Button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="img-fluid" src={blog2} alt="" />
                    </div>
                    <div>
                        <small className="text-muted">10 October, 2021</small>
                        <h4 className="text-primary">Keeping children safe during COVID-19</h4>
                        <p>Reports from health experts have suggested that children are not at more risk from the third wave of COVID-19. </p>
                        <Button variant="primary">Read More</Button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="img-fluid" src={blog3} alt="" />
                    </div>
                    <div>
                        <small className="text-muted">5 October, 2021</small>
                        <h4 className="text-primary">Effects of COVID-19 on the heart</h4>
                        <p>Even many weeks after recovery from COVID-19, people have been reporting unfavorable health effects on the body. </p>
                        <Button variant="primary">Read More</Button>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Blogs;