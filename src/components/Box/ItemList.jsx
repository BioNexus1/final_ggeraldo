import React, { useEffect } from 'react'
import Item from './Item';
import './../../styles/Box/ItemList.css';

function ItemList({items}) {
    return (
        <div className='list-items'>
            <ul>
              { items.map((item, i) => <li className='li-item-list' key={item.id} ><Item productName={item.name} productDescription={item.description} productStock={item.stock} price={item.price} /></li> )  }
            </ul>
        </div>
    )
}

export default ItemList