// REACT
import { useState, createContext, useContext, useEffect } from "react";

// COMPONENTS
import { CartContext } from '../context/CartContext';

// SE CREA CONTEX PARA CALCULAR LA CANTIDAD DE LOS PRODUCTOS EN EL CARRITO DEL CART CONTEXT Y MOSTRAR EN EL CARTWIDGET
export const cartLengthContext = createContext();

export const CartLengthContextProvider = ({ children }) => {
  const { cart } = useContext(CartContext);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setCartLength(
      cart.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cart]);

  return <cartLengthContext.Provider value={cartLength}>{children}</cartLengthContext.Provider>
}