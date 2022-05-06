import React from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap';
import './../../styles/Box/ItemDetail.css';
import ItemCountButton from '../Button/ItemCountButton'

function ItemDetail({item}) {
  const initial = 1;

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
                <ItemCountButton productStock={item.productStock} initial={initial} />
                <Button variant="primary">Agregar al carrito</Button>
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