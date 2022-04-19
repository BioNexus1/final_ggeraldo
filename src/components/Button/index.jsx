import React from 'react'

export const Button = ({texto, color}) => {
    // const {texto,  color} = props; 



    // const texto = props.texto;
  return (
      <div>
          <input type="text" />
          <button style={{ color: color }}>{texto ? texto : 'Button sin texto'}</button>
      </div>
  )

}

export default Button;
