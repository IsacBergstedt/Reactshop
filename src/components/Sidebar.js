import React, { useContext, useState } from 'react';

import { FaArrowRightFromBracket } from "react-icons/fa6";
import { TfiTrash } from "react-icons/tfi";

import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

import Checkoutmodal from '../components/Checkoutmodal';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const [showCheckoutmodal, setShowCheckoutmodal] = useState(false);

  const handleCheckoutmodalClose = () => {
    setShowCheckoutmodal(false);
  };

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex flex-col h-full'>
        <div className='flex items-center justify-between py-10 border-b '>
          <div className='uppercase text-sm font-semibold text-base'>
           Items in checkout: ({itemAmount}) 
          </div>
          <div
            onClick={handleClose}
            className='cursor-pointer w-8 h-8 flex justify-center items-center text-blue'
          >
            <FaArrowRightFromBracket className='text-2xl'/>
          </div>
        </div>
        <div className='flex flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b'>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className='flex flex-col gap-y-3 py-4 mt-auto'>
          <div className='flex w-full justify-between items-center'>
            <div className='uppercase font-semibold'>
              <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
            </div>
            <div
              onClick={clearCart}
              className='cursor-pointer py-6 bg-red-600 text-white w-12 h-12 flex justify-center items-center text-2xl'
            >
              <TfiTrash />
            </div>
          </div>
          

          <button

            onClick={() => setShowCheckoutmodal(true)}
            className='flex p-4 justify-center items-center text-white w-full font-medium bg-blue-800'
          >
            Checkout
          </button>
        </div>
      </div>

      <Checkoutmodal
        show={showCheckoutmodal}
        handleClose={handleCheckoutmodalClose}
        cart={cart}
        total={total}
      />
    </div>
  );
};

export default Sidebar;