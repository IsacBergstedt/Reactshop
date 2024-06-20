import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // deconstruct product
  const { id, images, category, title, price } = product;

  return (
    <div>
      <div className='border border-gray-300 h-[300px] mb-4 bg-zinc-100
      relative overflow-hidden group transition-shadow shadow-md rounded-md'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* bilder från api */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[160px] group-hover:scale-110 transition-transform duration-100'
              src={images[0]}
              alt={title}
            />
          </div>
        </div>

        {/* knappar vid hover av produkt */}
        <div className='absolute bottom-0 left-0 right-0 p-2 flex justify-center gap-x-2
        items-center transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-10 h-10 bg-blue-800 rounded-full'>
              <BsPlus className='text-2xl' />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='w-10 h-10 bg-white flex justify-center items-center text-primary shadow-md rounded-full'
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* kategori, titel, pris */}
      <div className='p-2'>
        <div className='text-xs capitalize text-gray-600 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='text-base font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='text-base'>$ {price}</div>
      </div>
    </div>
  );
};

export default Product;