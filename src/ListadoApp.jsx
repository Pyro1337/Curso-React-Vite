import React, { useState } from 'react';
import '../src/styles.css';
import { AgregarProducto } from './components/AgregarProducto';
const Item = ({ nombre, precio, comprado }) => {
  return (
    <li>
      {nombre} - ${precio} - {comprado ? "☑️" : "✖️"}
    </li>
  );
};


export const ListadoApp = () => {
  const addTask = () => {
    setArreglo([...arreglo,{nombre: "Pastel de Manzana", precio: 15000, comprado: true}]);
  }
  // Corrección en la declaración del array
  const listaProductos = [
    { nombre: "Pan", precio: 1500, comprado: true },
    { nombre: "Cafe", precio: 1000, comprado: true },
    { nombre: "Azucar", precio: 3000, comprado: true },
    { nombre: "Arroz", precio: 4000, comprado: false },
    { nombre: "Purina", precio: 600, comprado: false },
  ];

  // Estado inicial con useState
  const [arreglo, setArreglo] = useState(listaProductos);

  return (
    <>
      <h1>Listado de Productos a comprar</h1>
      <AgregarProducto></AgregarProducto>
      <ul>
        {arreglo.map((item) => (
          <Item
            key={item.nombre} // La clave para cada elemento
            nombre={item.nombre}
            precio={item.precio}
            comprado={item.comprado}
          />
        ))}
      </ul>
      
    </>
  );
};
