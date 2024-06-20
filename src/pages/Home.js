import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  const { products } = useContext(ProductContext);

  // Filtrera products efter kategorier fragrances och beauty
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    if (products) {
      const filter = products.filter((item) => (
        item.category === "fragrances" || item.category === "beauty"
      ));
      setFilteredProducts(filter);
    }
  }, [products]);

  return (
    <div>
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-screen-xl mx-auto'>
            {filteredProducts && filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;