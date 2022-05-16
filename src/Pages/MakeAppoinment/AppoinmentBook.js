import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

const AppoinmentBook = ({ date }) => {
    
    const [treatment, setTreatment]= useState(null);

    const formattedDate=format(date, 'PP')

const {data:services, isLoading, refetch}= useQuery(['available', formattedDate], ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
         .then(res => res.json())
 )
if (isLoading){
    return <Loading></Loading>
}


    return (
        <div className='my-5'>
            <h1 className='text-secondary text-center text-xl'>Abailable Appoinments on  {format(date, 'PP')}</h1>

            <div className='md:grid grid-cols-3 gap-7 my-20'>
                {
                    services?.map(service=> <Service
                    key={service._id} 
                    service={service}
                    setTreatment={setTreatment}
                    />)
                }
                {treatment&& <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}
                ></BookingModal>}
            </div>
        </div>
    );
};

export default AppoinmentBook;