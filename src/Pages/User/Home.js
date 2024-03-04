import React from 'react';
import './Home.css';
import Products from './Products';
import Navbar from './components/Navbar';
import Slider from './Slider';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* list products */}
      <Products />
      <Footer/>
    </div>

  );
};

export default Home;