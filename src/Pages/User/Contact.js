import React from 'react';
import contact from '../../assets/contact.jpg';
import './Contact.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='containerContent '>
                <img src={contact} alt='contact' style={{ width: '100%', height: '600px' }} />
                <div className='formContact'>
                    <h3 className='text-center'>Contact</h3>
                    <form action='' >
                        <label className='col-md-6'>Name</label>
                        <input className='form-control col-md-6' type='text' />
                        <label className='col-md-6'>Email</label>
                        <input className='form-control' type='email' />
                        <label className='col-md-6'>Message</label>
                        <textarea rows={3} className='form-control col-md-6' type='text'></textarea>
                    </form>
                    <button className='btn btn-warning mb-5 col-md-1 offset-md-6 mt-5'>Submit</button>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Contact;