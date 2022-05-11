import React from 'react'
import ItemCountButton from '../Button/ItemCountButton'
import './../../styles/Box/ItemCountContainer.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ItemCountContainer({item}) {
  const initial = 1;
  return (
    <div>
            <Card style={{ width: '18rem' }}>
              <Card.Header>{item.productName}</Card.Header>
                <Card.Img variant="top" src="http://via.placeholder.com/640X460/00000/FFFFFF/?text=PRODUCTO TEST" />
                {/* <Card.Img variant="top" src="holder.js/100px180?text=PRODUCTO TEST" /> */}
                <Card.Body>
                    <Card.Title style={{ color:'red' }}>${item.price}</Card.Title>
                    <Card.Text>
                        {item.productDescription}
                    </Card.Text>
                    <Link to={'/item/' + item?.id }>
                    <Button variant="secondary">Ver Detalle</Button>
                  </Link>
                    <ItemCountButton productStock={item.productStock} initial={initial} />
                    
                </Card.Body>
            </Card>

    </div>
  )
}

export default ItemCountContainer