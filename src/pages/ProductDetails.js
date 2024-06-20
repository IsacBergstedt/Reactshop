import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }

  const { title, price, description, images } = product;

  return (
    <section className='pt-32 pb-14 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        {/* Product image och text wrapper */}
        <div className='flex flex-col lg:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-lg'>
          {/* Product image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm rounded-lg' src={images[0]} alt='' />
          </div>
          {/* Product details */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-3xl lg:text-4xl font-medium mb-2 text-gray-800'>
              {title}
            </h1>

            <div className='text-2xl text-red-500 font-medium mb-6'>
              $ {price}
            </div>

            <p className='text-gray-700 mb-8'>{description}</p>
            
            <button
              onClick={() => addToCart(product, product.id)}
              className='bg-primary py-4 px-8 text-white rounded-md hover:bg-primary-dark'
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;