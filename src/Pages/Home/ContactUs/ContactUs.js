import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section
        style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover'
            }}
        className='p-10 rounded-lg'>
            <div className='text-center'>
                <h3 className='font-bold text-xl text-primary'>Contact Us</h3>
                <h1 className='text-white font-bold text-4xl'>Stay connected with us</h1>
            </div>
            
            <div className=''>
                <div className="card lg:w-1/2 sm:w-1/2 md:w-1/2">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-accent" placeholder="Bio"></textarea>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    );
};

export default ContactUs;