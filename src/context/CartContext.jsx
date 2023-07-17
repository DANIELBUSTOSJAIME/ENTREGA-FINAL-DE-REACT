// REACT
import { useState, createContext, useEffect, useContext } from "react";

// COMPONENT
import { QtyContext } from "../context/QtyContext"

//SE CREA UN CONTEXT PARA CONTENER LA LOGICA DEL CARRITO
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [qty, setQty] = useContext(QtyContext);
  const [cart, setCart] = useState(() => {
    try {
      const productsInLocalStorage = localStorage.getItem('cartProducts')
      return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  // SE GUARDA EL CARRITO EN EL LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cart));
    console.log(cart)
  }, [cart]);

  // FUNCION PARA AGREGAR PRODUCTOS AL CARRITO
  const addToCart = (product) => {
    const inCart = cart.find((productsInCart) => productsInCart.id === product.id);

    if (inCart) {
      setCart(
        cart.map((productsInCart) => {
          if (productsInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + parseInt(qty) };
          } else return productsInCart;
        })
      )
    } else {
      setCart([...cart, { ...product, amount: parseInt(qty) }])
    }
    setQty(1);
  };

  // FUNCION PARA ELIMINAR PRODUCTOS AL CARRITO
  const deleteFromCart = (product) => {
    const inCart = cart.find((productsInCart) => productsInCart.id === product.id);

    if (inCart.amount === 1) {
      setCart(cart.filter((productsInCart) => productsInCart.id !== product.id));
    } else {
      setCart(cart.map((productsInCart) => {
        if (productsInCart.id === product.id) {
          return { ...inCart, amount: inCart.amount - 1 };
        } else {
          return productsInCart;
        }
      }));
    }
  };

  // FUNCION PARA REMOVER PRODUCTOS AL CARRITO  
  const removeFromCart = (product) => {
    setCart(cart.filter((productsInCart) => productsInCart.id !== product.id));
  };

  // FUNCION PARA VACIAR EL CARRITO  
  const clearCart = () => {
    setCart([])
  }

  return (<CartContext.Provider value={{ cart, removeFromCart, deleteFromCart, addToCart, clearCart }}>{children}</CartContext.Provider>)
};
