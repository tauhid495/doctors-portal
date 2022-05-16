import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }
        console.log(booking);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appoinment is set : ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appoinment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                // for close the modal
                setTreatment(null);
            });

    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for : {name}</h3>
                    <form action="submit" onSubmit={handleBooking}>
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-lg my-3 bg-gray-200" />

                        <select name='slot' className="select select-bordered w-full max-w-lg">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' value={user?.displayName || ''} className="input input-bordered w-full max-w-lg my-3" />
                        <input type="email" name='email' value={user?.email || ''} className="input input-bordered w-full max-w-lg my-3" />
                        <input type="number" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-lg my-3" />
                        <input type="submit" name='submit' value='Submit' className="btn w-full max-w-lg my-3" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;