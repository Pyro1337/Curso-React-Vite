import {useState} from 'react';
import React from 'react'

export const AgregarProducto = () => {
  const [valueInput, setvalueInput] = useState('')
  const updateValueInput = (event) =>{
    setvalueInput(event.target.value);
  }
  return (
    <>
      <input 
        type='text' 
        placeholder='Agregar producto'
        value={valueInput}
        onChange={updateValueInput}
        >

      </input>
    </>
  )
}
