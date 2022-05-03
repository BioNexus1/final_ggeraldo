import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from './ItemDetail';


function getProductsById(id) {
    const myPromise = new Promise((resolve, reject) => {
        const products = [
        { id: 1, productName: 'Polera', productDescription: 'Polera cuello V', price: 1000, productStock: 3 },
        { id: 2, productName: 'Bufanda', productDescription: 'Bufando a cuadros', price: 2000, productStock: 7 },
        { id: 3, productName: 'Zapatillas', productDescription: 'Adidas Air Sport',  price: 3000, productStock: 2 },
        
        ];
        const item = products.filter(item => item.id === parseInt(id));
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