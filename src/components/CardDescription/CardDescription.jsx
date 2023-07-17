//REACT Y USECONTEXT
import React, { useContext } from 'react';

// COMPONENTES
import ItemCounter from '../ItemCounter/ItemCounter';
import { CartContext } from '../../context/CartContext';

// LIBRARYS
import { Button, Card, CardMedia, CardContent, IconButton, Typography } from '@mui/material/';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from "accounting";

// TARJETA DE DESCRIPCION DEL PRODUCTO QUE SE MUESTRA EN DETAIL PAGE UTILIZANDO MUI
export default function CardDescription({ product }) {
  const { image, name, price, color, size } = product
  const formattedPrice = accounting.formatMoney(price);
  
  // FUNCION DE AGREGAR AL CARRITO EN EL ICON
  const { addToCart } = useContext(CartContext)

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "70%", height: "60%", borderRadius: 10, border: "1px solid black" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "25%", height: "85%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CardMedia
              component="img"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              image={image}
              alt="Productos"
            />
          </div>
          <div style={{ width: "40%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <CardContent>
              <Typography variant='h5' color='textSecondary'>
                {formattedPrice}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {name}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Colores: {color}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Talles: {size}
              </Typography>
              <ItemCounter initial={1} />
              <IconButton onClick={() => addToCart(product)} color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
