// REACT
import React from 'react'

// COMPONENTS
import './ItemListConteiner.css'

// COMPONENTE QUE MUESTRA EL GRETTING
const ItemListConteiner = ({ gretting }) => {
  return (
    <div className='Alert'>
      <p>{gretting}</p>
    </div>

  )
}

export default ItemListConteiner