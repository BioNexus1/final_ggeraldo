import React from 'react'
import ItemCountButton from './../Button/ItemCountButton'
import './../../styles/Box/ItemCountContainer.css';
import { Card, Button } from 'react-bootstrap';
function ItemCountContainer({productName, productDescription}) {
  return (
    <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Producto Test" />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                        {productDescription}
                    </Card.Text>

                    <ItemCountButton />
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        {/* </div> */}

    </div>
  )
}

export default ItemCountContainer