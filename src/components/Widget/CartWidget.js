import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping  } from "@fortawesome/free-solid-svg-icons";
library.add(faCartShopping );

function CartWidget() {
  return (
    <div>
        <FontAwesomeIcon icon="fa-cart-shopping" /> 1
    </div>
  )
}

export default CartWidget