import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner/banner-1.jpg';
import banner2 from '../../../images/banner/banner-2.jpg';
import banner3 from '../../../images/banner/banner-3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            {/* banner area  */}
            <Carousel>
                {/* single item  */}
                <Carousel.Item interval={1500} className="carousel-item">
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <div className="carousel-text">
                        <div className="carousel-info">
                            <h1>Take the world's best quality Treadment</h1>
                            <Link to="/home">
                                <Button>Learn More</Button>
                            </Link>
                        </div>

                    </div>

                </Carousel.Item>
                {/* single item  */}
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner2}
                        alt="Second slide"
                    />
                    <div className="carousel-text">
                        <div className="carousel-info">
                            <h1>Excellence in care, teaching and research</h1>
                            <Link to="/home">
                                <Button>Know About Us</Button>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>
                {/* single item  */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner3}
                        alt="Third slide"
                    />
                    <div className="carousel-text">
                        <div className="carousel-info">
                            <h1>COVID-19 Resources for all New Yorkers</h1>
                            <Link to="/home">
                                <Button>Find Out More</Button>
                            </Link>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;