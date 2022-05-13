import React from 'react';
import clock from '../assets/icons/clock.svg';
import marker from '../assets/icons/marker.svg';
import phone from '../assets/icons/phone.svg';

const InfoCard = () => {
    return (
        <div className=' md:grid grid-cols-3 gap-9'>
            {/* card 1 */}
            <div className=" my-5 p-5 card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary border-none text-white">
                <figure><img src={clock} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Oprning Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>

            {/* Card2 */}
            <div className=" my-5 p-5 card lg:card-side bg-accent shadow-xl  border-none text-white">
                <figure><img src={marker} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>

            {/* Card3 */}
            <div className=" my-5 p-5 card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary border-none text-white">
                <figure><img src={phone} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>



        </div>
    );
};

export default InfoCard;