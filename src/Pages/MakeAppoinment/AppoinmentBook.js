import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AppoinmentBook = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment]= useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='my-5'>
            <h1 className='text-secondary text-center text-xl'>Abailable Appoinments on  {format(date, 'PP')}</h1>

            <div className='md:grid grid-cols-3 gap-7 my-20'>
                {
                    services.map(service=> <Service
                    key={service._id} 
                    service={service}
                    setTreatment={setTreatment}
                    />)
                }
                {treatment&& <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
            </div>
        </div>
    );
};

export default AppoinmentBook;