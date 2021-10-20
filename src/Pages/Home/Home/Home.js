import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            {/* banner component */}
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;