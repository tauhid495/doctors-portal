import React from 'react';

const Service = ({ service }) => {

    const { image, title, description } = service;
    return (
        <div class="p-4 card md:max-w-lg bg-base-100 shadow-xl text-center">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body ">
                <h2 class="card-title mx-auto">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;