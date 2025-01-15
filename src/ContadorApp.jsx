import React from 'react'
import { useState } from 'react' //declaramos el useState

export const ContadorApp = ({value}) => { //recibimos el value del padre.
    const [contador, setContador] = useState(value)
    
    const handleButton = () =>{
        setContador(contador + 1);
    }

    const resetCount = () =>{
        setContador(0);
    }
    
  return (
    <>
        <button onClick={handleButton}>Incrementar valor</button>
        <h2>Contador : {contador}</h2>

        <button onClick={resetCount}>Resetear conteo</button>

    </>

  )
}
