import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './../../styles/Box/ItemListContainer.css';
import ItemList from '../List/ItemList';

function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const products = [
      { id: 1, productName: 'Polera', productDescription: 'Polera cuello V', price: 1000, productStock: 3, category: 'Poleras'},
      { id: 2, productName: 'Bufanda', productDescription: 'Bufando a cuadros', price: 2000, productStock: 7, category: 'temporada' },
      { id: 3, productName: 'Zapatillas', productDescription: 'Adidas Air Sport',  price: 3000, productStock: 2, category: 'Zapatillas' },
      
    ];
    const productsFiltered = category ? products.filter(product => product.category === category) : products;
    console.log(productsFiltered);
    setTimeout(() => {
      resolve(productsFiltered);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({greeting}) {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    console.log(categoryId);
    getProducts(categoryId)
      .then(res =>{
        setProducts(res);
      })
  }, [categoryId])

  return (
    <div className='box'>
        {greeting}
        <ItemList items={products} />
        </div>
  )
}

export default ItemListContainer