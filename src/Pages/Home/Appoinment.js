import React from 'react';
import doctor from '../../assets/images/doctor.png';

const Appoinment = () => {
    return (
        <div className='p-20'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row bg-BG-appoinment">
                    <img src={doctor} class="hidden md:block mt-[-130px] max-w-lg rounded-lg " />
                    <div className='px-14 text-white'>
                        <h4 className='text-secondary font-semibold'>Appoinment</h4>
                        <h1 class="text-3xl font-bold">Make an appointment Today</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn bg-gradient-to-r from-secondary to-primary border-none text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;