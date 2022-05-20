import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const {id}=useParams();

    return (
        <div>
            <p className='text-2xl text-purple-500'>Plesase pay for : {id}</p>
        </div>
    );
};

export default Payment;