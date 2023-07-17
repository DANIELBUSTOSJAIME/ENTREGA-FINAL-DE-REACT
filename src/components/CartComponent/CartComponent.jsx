//REACT Y USECONTEXT
import React, { useContext } from 'react';

// COMPONENTES
import { CartContext } from '../../context/CartContext';
import "./CartComponent.css";

// COMPONENTE DE CARRITO QUE IMPORTA FUNCION PARA ACTUALIZAR EL CARRITO DEL CONTEXTCART
const CartComponent = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart, clearCart } = useContext(CartContext);

  // FUNCION PARA AGREGAR PRODUCTOS EN EL CARRITO
  const handleIncrement = (product) => {
    const updatedProduct = { ...product, amount: product.amount + 1 };
    addToCart(updatedProduct);
  };

  // FUNCION PARA ELIMINAR PRODUCTOS EN EL CARRITO
  const handleDecrement = (product) => {
    if (product.amount > 1) {
      const updatedProduct = { ...product, amount: product.amount - 1 };
      deleteFromCart(updatedProduct);
    }
  };

  // FUNCION PARA REMOVER PRODUCTOS DEL CARRITO
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  return (
    <div className='cart-container'>
      <div className="product-container">
        {cart.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <div id="product-actions">
              <button onClick={() => handleDecrement(product)}>-</button>
              <p className="product-quantity">{product.amount}</p>
              <button onClick={() => handleIncrement(product)}>+</button>
            </div>
            <div>
              <button onClick={() => handleRemoveFromCart(product)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <button className='botonVaciar' onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default CartComponent;