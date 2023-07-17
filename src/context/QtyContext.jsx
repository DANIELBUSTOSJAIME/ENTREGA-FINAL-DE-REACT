// REACT
import React, { useState, createContext } from 'react';

// SE CREA CONTEX PARA USAR EN ITEMCOUNTER
export const QtyContext = createContext();

export const QtyProvider = ({ children }) => {
  const [qty, setQty] = useState(1);

  return (
    <QtyContext.Provider value={[qty, setQty]}>
      {children}
    </QtyContext.Provider>
  );
};