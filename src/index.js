import React from 'react';
import { createRoot } from 'react-dom';

import './index.css';
import App from './App';

import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';

import ProductProvider from './contexts/ProductContext';



const root = createRoot(document.getElementById('root'));

root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
