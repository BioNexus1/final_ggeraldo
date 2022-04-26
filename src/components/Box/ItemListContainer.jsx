import React, { useEffect, useState } from 'react'
import './../../styles/Box/ItemListContainer.css';
import ItemList from './ItemList';

function ItemListContainer({greeting}) {

  function getProducts() {
    const myPromise = new Promise((resolve, reject) => {
      const products = [
        { id: 1, name: 'polera CK', description: 'Polera cuello V', price: 1000, stock: 3 },
        { id: 2, name: 'bufanda', description: 'Bufando a cuadros', price: 2000, stock: 7 },
        { id: 3, name: 'zapatillas', description: 'Adidas Air Sport',  price: 3000, stock: 2 },
        
      ];
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    return myPromise;
  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res =>{
        setProducts(res);
      })
  })

  return (
    <div className='box'>
        {greeting}
        <ItemList items={products} />
        </div>
  )
}

export default ItemListContainer