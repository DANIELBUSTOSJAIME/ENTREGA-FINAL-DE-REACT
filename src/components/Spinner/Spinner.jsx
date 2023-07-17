// REACT
import React from 'react'

// LIBRARYS
import { Stack, CircularProgress } from '@mui/material/';

// COMPONENTE DE SPINNER AL REFRESCAR LA PAGINA
const Spinner = () => {
  return (
    <Stack sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <CircularProgress color="error" />
    </Stack>
  );
}
export default Spinner



