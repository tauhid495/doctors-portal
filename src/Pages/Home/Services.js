import React from 'react';
import Service from './Service';
import fluride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {

    const services = [
        {
            "_id": 1,
            "image": fluride,
            "title": "Fluride Treatment",
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            "_id": 2,
            "image": cavity,
            "title": "Cavity Filling",
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            "_id": 3,
            "image": whitening,
            "title": "Teeth Whitening",
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]

    return (
        <div>
            <div className='text-center my-24'>
                <h1 className='uppercase text-primary font-bold'>our services</h1>

                <p className='text-3xl font-semibold text-accent'>Service We Provide</p>
            </div>

            <div className='md:grid grid-cols-3 p-4 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;