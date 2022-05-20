import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appoinment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')


    const {_id, price, patient, patientName } = appoinment;

    useEffect(() => {
        fetch('https://infinite-everglades-54280.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if(data?.clientSecret){
                    setClientSecret(data.clientSecret);
                }
            })

    }, [price])




    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const {paymentIntent, intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email:patient,
                },
              },
            },
          );
            if(intentError){
                setCardError(intentError?.message);
                setProcessing(false);
            }
            else{
                setCardError('');
                setTransectionId(paymentIntent.id);
                setSuccess('Your payment successfully');

                // store payment on database
                const payment={
                    appoinment:_id,
                    transectionId:paymentIntent.id,
                }
                fetch(`https://infinite-everglades-54280.herokuapp.com/booking/${_id}`,{
                    method:'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ payment })

                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    setProcessing(false);
                })
            }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm my-4' type="submit" disabled={!stripe||!clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                success && <div className='text-green-600'>
                    <p>{success}</p>
                    <p >Your transection Id is : <span className='text-orange-600 font-bold'>{transectionId}</span> </p>
                    </div>
            }
        </>
    );
};

export default CheckoutForm;