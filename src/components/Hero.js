import React from 'react';
import Perfume from '../img/perfume.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight / 2, // Skrollar ner halva veiwport height
      behavior: 'smooth', // Smooth scrolling
    });
  };


  return (
    <header className='h-[750px] bg-hero bg-no-repeat bg-cover bg-center py-28'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
          <div className='w-16 h-[2px] bg-blue-800 mr-4 '></div>Fresh fragrances
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            NEW STYLES <br />
            <span className='font-semibold'></span>
          </h1>
          <Link
            to={'/'}
            className='self-start uppercase font-semibold 
            relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-800'
            onClick={handleScroll}
          >
            Discover More
          </Link>
        </div>
        <div className='hidden lg:block max-w-sm '>
          <img src={Perfume} alt='New Fragrances' />
          
        </div>
      </div>
    </header>
  );
};

export default Hero;