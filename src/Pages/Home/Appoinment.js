import React from 'react';
import doctor from '../../assets/images/doctor.png';

const Appoinment = () => {
    return (
        <div className='md:px-20 py-10'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row bg-BG-appoinment">
                    <img src={doctor} className="hidden md:block mt-[-130px] max-w-lg rounded-lg " />
                    <div className='md:px-14 text-white'>
                        <h4 className='text-secondary font-semibold'>Appoinment</h4>
                        <h1 className="text-3xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn bg-gradient-to-r from-secondary to-primary border-none text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;