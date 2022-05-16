import React from 'react';

const Service = ({ service }) => {

    const { image, title, description } = service;
    return (
        <div className="p-4 my-4 card md:max-w-lg bg-base-100 shadow-xl text-center">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title mx-auto">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;