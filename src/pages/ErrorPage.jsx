// REACT
import React from 'react'
import { useNavigate } from 'react-router-dom'

// LIBRERIAS
import { Button } from '@mui/material/';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", margin: 20, fontFamily: 'Shadows Into Light Two', color: "rgb(224, 182, 65)" }}>
      <h1>Error Page Not Found</h1>
      <br />
      <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", margin: 20 }}>
        <Button style={{ fontFamily: "Caveat" }} onClick={() => navigate("/")} color="error" variant="outlined">Ir a la pagina de Inicio</Button>
      </div>
    </div>
  )
}

export default ErrorPage