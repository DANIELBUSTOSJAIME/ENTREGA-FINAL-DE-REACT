//REACT 
import React from 'react'

// COMPONENTES
import "./Footer.css"

// LIBRARYS
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// FOOTER DE LA APP
const Footer = () => {
  return (
    <div className='footer'>
      <div className="foot">
        <div className="direcciontelefono">
          <div >Dirección</div>
          <p>Av. Gral Paz N° 100 - Córdoba Capital (5000)</p>
          <div>Telefono</div>
          <a href="http://whatsapp.com" target="_blank"><WhatsAppIcon className="wsp" alt="wsp" /></a>
          <p>351-45678976</p>
        </div>
        <div className="redessociales">
          <div>Redes Sociales</div>
          <a href="http://facebook.com" target="_blank"><FacebookIcon alt="facebook" width="30" /></a>
          <a href="http://instagram.com" target="_blank"><InstagramIcon alt="instagram" width="30" /></a>
        </div>
        <div className="copy">
          <p>Todos los derechos del sitio web estan reservados por Copyright. 2023</p>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Footer