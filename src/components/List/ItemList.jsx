import React, { useEffect } from 'react'
import Item from '../Object/Item';
import './../../styles/Box/ItemList.css';

function ItemList({items}) {
    return (
        <div className='list-items'>
            <ul>
              { items.map((item, i) => <li className='li-item-list' key={item.id} ><Item item={item} /></li> )  }
            </ul>
        </div>
    )
}

export default ItemList