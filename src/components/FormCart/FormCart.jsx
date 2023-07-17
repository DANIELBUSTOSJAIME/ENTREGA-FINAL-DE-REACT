//REACT Y USECONTEXT Y ROUTER DOM
import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";

// COMPONENT
import MessageSucess from '../MessageSucess/MessageSucess';
import { CartContext } from '../../context/CartContext';

// FIREBASE
import { db } from "../../firebase/FirebaseConfig"
import { collection, addDoc } from "firebase/firestore";

// LIBRERYS
import { Box, TextField, Button, Stack, Modal } from '@mui/material/';
import SendIcon from '@mui/icons-material/Send';
import { Formik } from 'formik';
import * as yup from "yup";

// FUNCIONES DE YUP -VALIDATION- Y EVENT SUBMIT
const yupSchema = yup.object({
  name: yup.string().min(2).max(30).required(),
  lastName: yup.string().min(2).max(30).required(),
  email: yup.string().email().required(),
  emailAgain: yup.string().email().required()
})


const FormCart = () => {
  const navigate = useNavigate();
  const { clearCart, cart } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false);
  const [purchaseID, setPurchaseID] = useState(null);

  // FUNCION DE SUBMIT CON RESET DEL FORM Y ENVIO A DATOS FIREBASE
  const submitHandler = async (values, resetForm) => {
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
      cart: cart,
    });
    setPurchaseID(docRef.id)
    console.log(values)
    resetForm()
    setShowModal(true);
  }

  //FUNCION DE VACIAR EL CARRITO AL CIERRE DE MODAL POST SUBMIT
  const handleCloseModal = () => {
    clearCart();
    setShowModal(false);
  }
// FORMULARIO CON FORMIK PARA FINALIZAR COMPRA
  return (
    <div >
      
      <Formik
        validationSchema={yupSchema}
        onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          emailAgain: ""
        }}
      >
        {({ values,
          handleSubmit,
          handleChange,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}
              sx={{
                '& > :not(style)': { m: 1, width: '50ch', fontFamily: "Arial" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                name="name"
                label="Nombres"
                color="warning"
                focused
                value={values.name}
                onChange={handleChange}
              />
              <div style={{ padding: "5", color: "black", marginBottom: 5 }}>
                {errors.name && touched.name && errors.name}
              </div>
              <TextField
                name="lastName"
                label="Apellidos"
                color="warning"
                focused
                value={values.lastName}
                onChange={handleChange}
              />
              <div style={{ padding: "5", color: "black", marginBottom: 5 }}>
                {errors.lastName && touched.lastName && errors.lastName}
              </div>
              <TextField
                name="email"
                label="Mail"
                color="warning"
                focused
                value={values.email}
                onChange={handleChange}
              />
              <div style={{ padding: "5", color: "black", marginBottom: 5 }}>
                {errors.email && touched.email && errors.email}
              </div>
              <TextField
                name="emailAgain"
                label="Ingrese nuevamente su email"
                color="warning"
                focused
                value={values.emailAgain}
                onChange={handleChange}
              />
              <div style={{ padding: "5", color: "black", marginBottom: 5 }}>
                {errors.emailAgain && touched.emailAgain && errors.emailAgain}
              </div>
            </Box>
            <Stack style={{ display: "flex", flexDirection: "column", alignItems: "center" }} spacing={2}>
              <Button
                style={{ fontFamily: "Caveat", color: "black" }}
                type="submit"
                variant="contained"
                color="error"
                endIcon={<SendIcon />}
              >
                Finalizar
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
      <br />
      {showModal && <MessageSucess purchaseID={purchaseID} />}
      <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", margin: 20 }}>
        <Button style={{ fontFamily: "Caveat" }} onClick={() => { navigate("/"); handleCloseModal(); }} color="error" variant="outlined">Ir a la página de Inicio</Button>
      </div>
    </div>
  )
}

export default FormCart