import React, { useState, createContext } from 'react';

// Skapa context
export const SidebarContext = createContext();

// Sidebar providerkomnponent
const SidebarProvider = ({ children }) => {
 //State för hantera sidebar open och close
  const [isOpen, setIsOpen] = useState(false);

  
  const handleClose = () => {
    setIsOpen(false);
  };

  
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;