import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);

  // Contexts för sidebar och cart
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // Effekter för skroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? 'bg-grey py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* Logo */}
        <Link to='/'>
          <img className='w-[40px]' src={Logo} alt='Logo' />
        </Link>
        {/* Cart med item count */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
          <LiaShoppingBagSolid className='text-4xl' />
          <div className='bg-blue-800 absolute -right-1 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;