import React from 'react';

const ContactUs = () => {
    return (
        <section>
            <div className="bg-BG-appoinment">
                <div className="py-10 ">
                    <div className="my-36 w-3/4 md:w-4/12 mx-auto shadow-2xl ">
                        <div className="text-white text-center">
                            <div className='text-primary'>Contuct Us</div>
                            <div className='text-3xl '>Stay connected with us</div>

                            <br />
                            <div className="form-control">

                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <br />
                            <div className="form-control">
                                <input type="text" placeholder="subject" className="input input-bordered" />
                            </div> <br />
                            <div className="form-control">
                                <textarea className='textarea' placeholder='message'></textarea>
                            </div>
                            <div className="form-control mt-6 w-1/2 mx-auto">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;