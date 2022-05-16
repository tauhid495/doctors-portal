import React from 'react';
import InfoCard from '../../InfoCard/InfoCard';
import Banner from './Banner';
import Services from './Services';
import Treatment from './Treatment';
import Appoinment from './Appoinment';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCard />
            <Services />
            <Treatment />
            <Appoinment />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;