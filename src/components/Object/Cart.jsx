import React, { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'

function Cart({props}) {

  const cartCtx = useContext(CartContext);
  useState(()=>{
    console.log(cartCtx);
  },[])
  
  return (
    <div>
        {props}
    </div>
  )
}

export default Cart