import React from 'react'

function ItemCountButton() {
  return (
    <div>
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text">-</span>
        </div>
        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
        <div className="input-group-append">
            <span className="input-group-text">+</span>
        </div>
        </div>

    </div>
  )
}

export default ItemCountButton