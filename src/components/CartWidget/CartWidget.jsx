//REACT Y USECONTEXT
import { React, useContext } from "react";

// COMPONENTES
import { cartLengthContext } from '../../context/CartLengthContext';
import "./CartWidget.css"

// LIBRARYS
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// COMPONENTE DEL CARRITO EN HOME QUE MUESTRA LA CANTIDAD DE PRODUCTOS DEL CARRITO
const CartWidget = () => {
  const cartLength = useContext(cartLengthContext)

  return (
    <div className="Widget">
      <ShoppingCartIcon />

      <p id="NumberWidget">{cartLength === 0 ? null : cartLength}</p>

    </div>
  )
}

export default CartWidget