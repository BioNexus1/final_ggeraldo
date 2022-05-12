import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../store/cart-context';

import ItemDetail from '../Object/ItemDetail';
import ProductList from '../testComponents/items';


function getProductsById(id) {
        const myPromise = new Promise((resolve, reject) => {

            const products = ProductList;

            const item = products.find(item => item.id === parseInt(id));
            setTimeout(() => {
                resolve(item[0]);
            }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();
    

    useEffect(() => {
        getProductsById(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('ERROR');
            });
    }, [id]);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer