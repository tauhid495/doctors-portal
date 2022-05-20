import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const date1 = date? date:new Date();
    return (
        <div>
            <AppointmentBanner date={date1} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date1}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;