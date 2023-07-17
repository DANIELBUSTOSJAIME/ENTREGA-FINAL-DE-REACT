// REACT
import * as React from 'react';

// LIBRARYS
import { Alert, Stack } from '@mui/material/';

const MessageContact = () => {
  return (
    <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
    <Alert severity="success">Gracias por su consulta. Proximamente nos estaremos comunicando con usted!</Alert>
  </Stack>
  )
}

export default MessageContact