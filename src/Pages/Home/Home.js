import React from 'react';
import InfoCard from '../../InfoCard/InfoCard';
import Banner from './Banner';
import Services from './Services';
import Treatment from './Treatment';
import Appoinment from './Appoinment';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCard />
            <Services />
            <Treatment />
            <Appoinment />
        </div>
    );
};

export default Home;