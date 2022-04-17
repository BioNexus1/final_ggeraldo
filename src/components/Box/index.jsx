import React from 'react'
import './../../styles/Box/Box.css';

function index({titulo, children}) {
  return (
    <div className='box'>
            {titulo}
            {children}
    </div>
  )
}

export default index