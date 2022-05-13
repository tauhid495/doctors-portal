import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBannar from './AppoinmentBannar';
import AppoinmentBook from './AppoinmentBook';

const MakeAppoinment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className='px-5'>
            <AppoinmentBannar
                date={date}
                setDate={setDate} />
            <AppoinmentBook 
            date={date}/>

            <Footer />

        </div>
    );
};

export default MakeAppoinment;