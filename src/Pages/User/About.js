import React from 'react';
import slider from '../../assets/about.jpg'
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

const About = () => {
    return (
        <div>
            <Navbar/>
               <div className="card bg-dark text-white border-0 mb-5">
        <img src={slider} className="card-img" alt="bg" height={620} />
        <div className="card-img-overlay">
    
            <h5 className="card-title display-5 col-sm-3 fw-bolder">About Pet Shop</h5>
         <p style={{width: '60%', fontSize: '18px'}}>
            
         Welcome to Pet Paradise - where pets' spirits and health are best cared for! At Pet Paradise, we are dedicated to providing you with the highest quality products for the care and feeding of your pets. With a range of products from nutritious food to fun toys, we are committed to providing you and your pet with a satisfying and enjoyable shopping experience. Come to Pet Paradise today and discover a fresh world of love and connection between you and your pet!
         </p>

         <Link className='btn btn-outline-dark' to={'/home'}>Explore now!</Link>
        </div>
      </div>

      <Footer/>
        </div>
    );
};

export default About;