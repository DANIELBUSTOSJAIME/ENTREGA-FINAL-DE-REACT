// REACT
import * as React from 'react';

// COMPONENTS
import FormCart from '../FormCart/FormCart';

// LIBRARYS
import { Box, Button, Typography, Modal } from '@mui/material/';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid black',
  boxShadow: 24,
  p: 4,
};

// MODAL QUE CONTIEN EL FORMULARIO DE PURCHASE
export default function ModalCart() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button style={{ fontFamily: "Caveat", backgroundColor: 'red', color: 'white' }} onClick={handleOpen}>Generar Orden de Compra</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ingrese sus datos
          </Typography>
          <FormCart />
        </Box>
      </Modal>
    </div>
  );
}