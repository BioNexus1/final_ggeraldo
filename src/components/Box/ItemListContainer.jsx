import React from 'react'
import './../../styles/Box/ItemListContainer.css';
import ItemCountContainer from './ItemCountContainer';

function ItemListContainer({greeting}) {
  return (
    <div className='box'>
        {greeting}
        <ItemCountContainer productName='Producto 1' productDescription='Descripcion 1'/>
        </div>
  )
}

export default ItemListContainer