import React, { useEffect, useState } from 'react'
import './../../styles/Box/ItemListContainer.css';
import ItemList from './ItemList';

function ItemListContainer({greeting}) {

  function getProducts() {
    const myPromise = new Promise((resolve, reject) => {
      const products = [
        { id: 1, productName: 'Polera', productDescription: 'Polera cuello V', price: 1000, productStock: 3 },
        { id: 2, productName: 'Bufanda', productDescription: 'Bufando a cuadros', price: 2000, productStock: 7 },
        { id: 3, productName: 'Zapatillas', productDescription: 'Adidas Air Sport',  price: 3000, productStock: 2 },
        
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