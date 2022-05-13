import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div className='md:p-20 mt-10 mb-24'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="fluid md:max-w-md rounded-lg shadow-2xl" />
                    <div className='md:pl-24'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page whe n looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'What is your Name, Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn bg-gradient-to-r from-secondary to-primary border-none text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;