import React, { useEffect, useState } from 'react'
import './../../styles/Button/ItemCountButton.css';

function ItemCountButton({productStock, initial, onAdd}) {
  const [count, setCount] = useState(initial);
  
  function handlePlusCount(){
    if(count < productStock){
      setCount(count + 1);
    }
  }
  function handleMinCount(){
    if(count > 0){
      setCount(count - 1)
    }
  }
  useEffect(() => {
    console.log('ha dado click');
    // return () => {
    //   console.log('ha desmontado el contador');
    // }
  }, [count]);

  return (
    <div>
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            {/* <span className="input-group-text">-</span> */}
            <button type="button" onClick={() => handleMinCount()} className="btn btn-secondary">-</button>
        </div>
        <input type="text" className="form-control input-center" aria-label="Cantidad" value={count} readOnly />
        <div className="input-group-append">
            <button type="button" onClick={() => handlePlusCount()} className="btn btn-secondary">+</button>
            {/* <span className="input-group-text">+</span> */}
        </div>
        </div>

    </div>
  )
}

export default ItemCountButton