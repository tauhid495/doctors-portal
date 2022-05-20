import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1PpSCHxuHbzG52OeWhAXxM2rfxIvZl7IQEGHu8QmkiKxPYxYMymyeptvDmyasvbUuXTK5Tr58VJMhSrvaV0JlE00wktlTg3W');

const Payment = () => {

    const { id } = useParams();
    const url = `https://infinite-everglades-54280.herokuapp.com/booking/${id}`;
    const { data: appoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col ">

                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p className='text-success'>Hellow {appoinment.patientName}</p>
                            <h2 class="card-title">Pay for {appoinment.treatment}</h2>
                            <p>Your Appoinment {appoinment.date} at {appoinment.slot}</p>
                            <p>Please pay $ {appoinment.price}</p>
                        </div>
                    </div>

                    <div class="card w-[500px] bg-base-100 shadow-xl">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appoinment={appoinment}/>
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;