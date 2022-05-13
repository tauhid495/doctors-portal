import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot);
        setTreatment(null);
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for : {name}</h3>
                    <form action="submit" onSubmit={handleBooking}>
                        <input type="text" readOnly value={format(date, 'PP')} class="input input-bordered w-full max-w-lg my-3 bg-gray-200" />

                        <select name='slot' class="select select-bordered w-full max-w-lg">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full max-w-lg my-3" />
                        <input type="email" name='email' placeholder="Phone Number" class="input input-bordered w-full max-w-lg my-3" />
                        <input type="number" name='phone' placeholder="Email" class="input input-bordered w-full max-w-lg my-3" />
                        <input type="submit" name='submit' value='Submit' class="btn w-full max-w-lg my-3" />
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;