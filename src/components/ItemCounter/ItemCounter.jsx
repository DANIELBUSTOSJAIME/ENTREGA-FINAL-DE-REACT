// REACT Y CONTEXT
import { React, createContext, useContext} from 'react';

// COMPONENTS
import "./ItemCounter.css"

// CONTEXT
import { QtyContext } from "../../context/QtyContext"

// SE CREA CONTEXT PARA TRASLADAR LA CANTIDAD DE LOS PRODUCTOS AL CARRITO 
export const qtyproduct = createContext();

// COMPONENTE DE CONTADOR DEL CARD DESCRIPTION
const ItemCounter = ( {initial}) => {
  const [qty, setQty] = useContext(QtyContext);
  const addProduct = (num) => {
    setQty(qty + num);
  };
  
  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button className="count-container__button" onClick={() => addProduct(-1)} disabled={qty === initial}>
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button className="count-container__button" onClick={() => addProduct(+1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCounter