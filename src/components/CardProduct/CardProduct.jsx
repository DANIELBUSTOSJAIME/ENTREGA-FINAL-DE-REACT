//REACT
import * as React from 'react';

// LIBRARYS
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';
import accounting from "accounting";

// TARJETA DEL PRODUCTO QUE SE MUESTRA EN HOME PAGE UTILIZANDO MUI
export default function CardProduct({ product }) {
  const { image, name, price } = product
  const formattedPrice = accounting.formatMoney(price);
  
  return (
    <Card sx={{ width: 500, height: 550, borderRadius: 7, border: "1px solid grey" }}>
      <CardHeader
        action={
          <Typography
            variant='h6'
            color='textSecundary'
          >
            {formattedPrice}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        width={150}
        height={400}
        image={image}
        alt="Productos"
      />
      <CardContent>
        <Typography sx={{ textAlign: "center" }} variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
