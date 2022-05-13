import React from 'react';

const Service = ({ service, setTreatment }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div class="card-body">
                <h2 class="card-title justify-center text-secondary">{service.name}</h2>
                {
                    service.slots.length ? <span>{service.slots[0]}</span> : <span className='text-red-600'>No Slot Available</span>

                }
                <p>{service.slots.length} {service.slots.length > 1 ? 'spaces' : 'space'} available.</p>
                <div class="card-actions justify-center">
                   <label onClick={() => setTreatment(service)}
                        disabled={service.slots.length === 0}
                    for="booking-modal" className="btn bg-gradient-to-r from-secondary to-primary border-none text-white font-bold uppercase">Book appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;