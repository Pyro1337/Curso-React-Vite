import React, { useState } from 'react';
import '../src/styles.css';
import { AgregarTemas } from './components/AgregarTemas';

const Item = ({ nombre, visto, id }) => {
  // Componente para mostrar un tema de la lista
  return (
    <li>
      {id} - {nombre} - {visto ? "☑️" : "❌"} {/* Mostrar check si "visto" es true, ❌ si es false */}
    </li>
  );
};

export const ListadoApp = () => {
  // Lista inicial de temas
  const listaTemass = [
    { id: 1, nombre: "VITE", visto: true },
    { id: 2, nombre: "REACT", visto: true },
    { id: 3, nombre: "COMPONENTES", visto: true },
    { id: 4, nombre: "ARRAYS", visto: false },
    { id: 5, nombre: "FORMULARIOS", visto: false },
  ];

  // Estado para manejar la lista de temas
  const [arreglo, setArreglo] = useState(listaTemass);

  // Función para agregar un nuevo tema al estado
  const agregarNuevoTema = (nuevoTema) => {
    // Crear un nuevo objeto de tema con un id único
    const nuevoItem = {
      id: arreglo.length + 1, // Generar un id basado en la longitud actual del array
      nombre: nuevoTema, // El nombre del tema viene del input
      visto: false, // Por defecto, el nuevo tema no está marcado como visto
    };

    // Actualizar el estado de la lista agregando el nuevo tema
    setArreglo([...arreglo, nuevoItem]);
  };

  return (
    <>
      <h1>Listado de Temas</h1>
      {/* Pasar la función para agregar temas como prop al componente hijo */}
      <AgregarTemas onAgregarTema={agregarNuevoTema} />
      <ul>
        {/* Renderizar cada tema de la lista */}
        {arreglo.map((item) => (
          <Item
            key={item.id} // Clave única para cada tema (React necesita esto)
            nombre={item.nombre} // Pasar el nombre del tema
            visto={item.visto} // Pasar el estado de "visto" del tema
            id = {item.id}
          />
        ))}
      </ul>
    </>
  );
};
