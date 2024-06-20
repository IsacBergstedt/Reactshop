import React from 'react';
import SminkFooterImage from '../img/sminkfooter.jpg';

const Footer = () => {
  return (
    <footer className='py-24' style={{ backgroundImage: `url(${SminkFooterImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='container mx-auto'>
        <p className='text-white text-center text-lg'>
          {/* Nuvarande år */}
          Copyright &copy; {new Date().getFullYear()} Online shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;