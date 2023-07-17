// REACT AND REACT ROUTER DOM
import { React, useContext } from 'react';
import { useNavigate } from "react-router-dom";

// COMPONENTS
import ModalCart from "../components/ModalCart/ModalCart"
import CartComponent from '../components/CartComponent/CartComponent';
import { cartLengthContext } from '../context/CartLengthContext';
import { CartContext } from '../context/CartContext';

// LIBRERIAS
import { Button } from '@mui/material/';
import accounting from "accounting";

// PAGINA DEL CARRITO
const ShopPage = () => {
  const cartLength = useContext(cartLengthContext);
  const { cart } = useContext(CartContext)
  const navigate = useNavigate();
  const total = cart.reduce(
    (previous, current) => previous + current.amount * current.price, 0);
  const formattedTotal = accounting.formatMoney(total);
  return (
    <div>
      <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", margin: 20, fontFamily: 'Shadows Into Light Two', color: "rgb(224, 182, 65)" }}>
        <h1>Carrito</h1>
      </div>
      <div style={{ display: "flex", flexDirection: 'column', textAlign: "center", margin: 20, fontFamily: 'Shadows Into Light Two', color: "rgb(224, 182, 65)" }}>
        {cartLength === 0 ? <p>Su carrito está vacío, agregue un producto 😉</p> : <CartComponent />}
        {cartLength === 0 ? null : <h2 style={{ marginTop: "20px" }}>Total: {formattedTotal}</h2>}
        {console.log(total)}
      </div>
      {cartLength !== 0 && <ModalCart />}
      <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", margin: 20 }}>
        <Button style={{ fontFamily: "Caveat" }} onClick={() => navigate("/")} color="error" variant="outlined">Ir a la pagina de Inicio</Button>
      </div>
    </div>
  )
}

export default ShopPage