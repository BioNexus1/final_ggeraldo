import React from 'react'
import './../../styles/Box/ItemListContainer.css';
import ItemCountContainer from './ItemCountContainer';

function ItemListContainer({greeting}) {
  return (
    <div className='box'>
        {greeting}
        <ItemCountContainer productName='Producto 1' productDescription='Descripcion 1' productStock={5} />
        </div>
  )
}

export default ItemListContainer