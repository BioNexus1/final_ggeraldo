import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './../../styles/Box/ItemListContainer.css';
import ItemList from '../List/ItemList';
import CartContext from '../../store/cart-context';
import ProductList from '../testComponents/items';

function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const products = ProductList;
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
  const cartCtx  = useContext(CartContext);


  useEffect(() => {
    console.log(cartCtx);
  },[])

  useEffect(() => {
    // console.log(categoryId);
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