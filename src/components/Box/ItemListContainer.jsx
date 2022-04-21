import React from 'react'
import './../../styles/Box/ItemListContainer.css';

function ItemListContainer({greeting}) {
  return (
    <div className='box'>
        {greeting}
        </div>
  )
}

export default ItemListContainer