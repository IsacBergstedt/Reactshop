import React, { useState } from 'react';



const Checkoutmodal = ({ show, handleClose, cart, total }) => {
  //State för att hantera användarinformation i checkout-formuläret
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false); // State variabel se om ordern placerats

  if (!show) {
    return null;
  }

  // Hantera formulärsinskickning
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, address });
    setOrderPlaced(true); //Sätt orderPlaced till true efter inskickning
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-5 relative'>
      {/* Stängknapp */}
        <button
          onClick={handleClose}
          className='absolute top-3 right-3 text-gray-600 hover:text-gray-900'
        >
          X
        </button>
        <h2 className='text-2xl font-semibold mb-4'>Checkout success!</h2>
        {/* Visa meddelande om ordern är placerad */}
        {orderPlaced ? (
          <p className='text-green-500'>Order successfully placed! Check your Email for receipts and shipping details.</p>
        ) : (
          <>

          {/* Visa meddelande om varukorgen är tom */}
            {cart.length === 0 ? (
              <p>Your shopping bag is empty.</p>
            ) : (
              <div className='flex flex-col gap-y-2 overflow-y-auto max-h-[300px]'>
                {cart.map((item) => (
                  <div key={item.id} className='flex justify-between items-center border-b pb-2'>
                    <img src={item.images[0]} alt={item.title} className='w-16 h-16 object-cover' />
                    <div className='flex-1 ml-4'>
                      <h3 className='text-lg font-semibold'>{item.title}</h3>
                      <p className='text-sm text-gray-500'>${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Totalpris för varukorgen */}
            <div className='mt-4'>
              <div className='flex justify-between text-xl font-semibold'>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout-formulär */}
            <form className='mt-4' onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 font-medium mb-2'>
                  Name & Lastname
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full border border-gray-300 p-2 rounded'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full border border-gray-300 p-2 rounded'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='address' className='block text-gray-700 font-medium mb-2'>
                  Address
                </label>
                <input
                  type='text'
                  id='address'
                  className='w-full border border-gray-300 p-2 rounded'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              {/* Knapp för att skicka ordern */}
              <button
                type='submit'
                className='mt-4 w-full text-white py-2 rounded-lg bg-blue-800'
              >
                Buy now
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkoutmodal;