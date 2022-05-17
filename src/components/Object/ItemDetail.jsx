import React, { useContext, useEffect, useState } from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap';
import './../../styles/Box/ItemDetail.css';
import ItemCountButton from '../Button/ItemCountButton'
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';

function ItemDetail({item}) {
    const initial = 1;
    const [qtyProducts, setQtyProducts] = useState(null);

    const cartCtx = useContext(CartContext); 
    
    // useEffect(() => {
    //     console.log(cartCtx);
    // },[])

    function addHandler(qtyProductsAdd){
        // setQtyProducts(qtyProductsAdd);
        cartCtx.addProduct(item);
    }

    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="http://via.placeholder.com/230X120/00000/FFFFFF/?text=PRODUCTO TEST" />
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>{item.productName}</Card.Title>
                    <Card.Text style={{ color:'red' }}>
                        $ {item.price}
                    </Card.Text>
                    <Card.Text>
                        {item.productDescription}
                    </Card.Text>
                    <Card.Text>
                        {/* <p> */}
                            Stock: {item.productStock}
                        {/* </p> */}
                    </Card.Text>
                    {cartCtx.products.length ? 
                        <Button variant="primary">
                            <Link to='/cart' id='cartLink'>
                                Agregando {qtyProducts} productos al carrito
                            </Link>
                        </Button>
                    :
                        <ItemCountButton productStock={item.productStock} initial={initial} onAdd={ addHandler }/>
                    }
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
        </div>
    )
}

export default ItemDetail