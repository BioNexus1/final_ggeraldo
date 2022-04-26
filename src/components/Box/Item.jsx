import React from 'react'
import ItemCountButton from '../Button/ItemCountButton'
import './../../styles/Box/ItemCountContainer.css';
import { Card, Button } from 'react-bootstrap';
function ItemCountContainer({productName, productDescription, productStock, id, price}) {
  const initial = 1;
  return (
    <div>
            <Card style={{ width: '18rem' }}>
              <Card.Header>{productName}</Card.Header>
                <Card.Img variant="top" src="http://via.placeholder.com/640X460/00000/FFFFFF/?text=PRODUCTO TEST" />
                {/* <Card.Img variant="top" src="holder.js/100px180?text=PRODUCTO TEST" /> */}
                <Card.Body>
                    <Card.Title style={{ color:'red' }}>{price}</Card.Title>
                    <Card.Text>
                        {productDescription}
                    </Card.Text>

                    <ItemCountButton productStock={productStock} initial={initial} />
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>

    </div>
  )
}

export default ItemCountContainer