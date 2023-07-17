// REACT
import * as React from 'react';

// LIBRARYS
import { Alert, Stack } from '@mui/material/';

// COMPONENTE DE MENSAJE QUE MUESTA EL ID DEL PURCHASE DE FIREBASE
const MessageSucess = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Gracias por su compra. Tome nota del ID de su orden de compra el cual es: {purchaseID}</Alert>
    </Stack>
  );
}

export default MessageSucess