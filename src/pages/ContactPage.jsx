// REACT AND REACT ROUTER DOM
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// COMPONENTS
import MessageContact from '../components/MesageContact/MessageContact';

// FIREBASE
import { db } from "../firebase/FirebaseConfig"
import { collection, addDoc } from "firebase/firestore";

// LIBRERIAS
import { Box, TextField, Button, Stack } from '@mui/material/';
import SendIcon from '@mui/icons-material/Send';
import Textarea from '@mui/joy/Textarea';
import { Formik } from 'formik';
import * as yup from "yup";

// FUNCIONES DE YUP -VALIDATION- Y EVENT SUBMIT
const yupSchema = yup.object({
  fullName: yup.string().min(2).max(30).required(),
  email: yup.string().email().required(),
  telephone: yup.number().required(),
  textArea: yup.string().max(300).required()
})

// FUNCION DEL SUBMIT DEL CONTAC PAGE PARA SER ENVIADO AL FIREBASE


// FORMULARIO DEL CONTACT PAGE USANDO FORMIX
const ContactPage = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  const submitHandler = async (values, resetForm) => {
  
    const docRef = await addDoc(collection(db, "questions"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    console.log(values)
    resetForm()
    setShowMessage(true);
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", margin: 20, fontFamily: 'Shadows Into Light Two', color: "rgb(224, 182, 65)" }}>
        <h1>Contacto</h1>
      </div>
      <div style={{}}>
        <Formik
          validationSchema={yupSchema}
          onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
          initialValues={{
            fullName: "",
            telephone: "",
            email: "",
            textArea: ""
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
                component="div"
                sx={{
                  '& > :not(style)': { m: 1, width: '50ch', fontFamily: "Arial" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  name="fullName"
                  label="Nombre Completo"
                  color="warning"
                  focused
                  value={values.fullName}
                  onChange={handleChange}
                />
                <div style={{ padding: "5", color: "black", marginBottom: 5 }}>
                  {errors.fullName && touched.fullName && errors.fullName}
                </div>
                <TextField
                  name="telephone"
                  label="Telefono"
                  color="warning"
                  focused
                  value={values.telephone}
                  onChange={handleChange}
                />
                <div style={{ padding: "5", color: "black", marginBottom: 5 }}>
                  {errors.telephone && touched.telephone && errors.telephone}
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
                <Textarea
                  label="Consulta"
                  name="textArea"
                  placeholder="Ingresa tu consulta..."
                  variant="outlined"
                  color="danger"
                  value={values.textArea}
                  onChange={handleChange}
                />
              </Box>
              <Stack style={{ display: "flex", flexDirection: "column", alignItems: "center" }} spacing={2}>
                <Button
                  style={{ fontFamily: "Caveat", color: "black" }}
                  type="submit"
                  variant="contained"
                  color="error"
                  endIcon={<SendIcon />}
                >
                  Enviar
                </Button>
              </Stack>
              <br />
              <div>
              {showMessage && <MessageContact />}
              </div>
            </form>
          )
          }
        </Formik>
      </div>
      <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", margin: 20 }}>
        <Button style={{ fontFamily: "Caveat" }} onClick={() => navigate("/")} color="error" variant="outlined">Ir a la pagina de Inicio</Button>
      </div>
    </div>
  )
}

export default ContactPage