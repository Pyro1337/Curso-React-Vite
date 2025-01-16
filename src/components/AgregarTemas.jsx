import React, { useState } from 'react';

export const AgregarTemas = ({ onAgregarTema }) => {
  // Estado local para manejar el valor del input
  const [tema, setTema] = useState('');

  // Manejar los cambios en el input
  const onInputChange = (event) => {
    setTema(event.target.value); // Actualizar el estado local con el valor del input
  };

  // Manejar el envío del formulario (al presionar Enter)
  const onFormSubmit = (event) => {
    event.preventDefault(); // Evitar que el navegador recargue la página
    if (tema.trim().length > 0) { // Validar que el input no esté vacío
      onAgregarTema(tema); // Llamar a la función del padre con el nuevo tema
      setTema(''); // Limpiar el input después de agregar el tema
    }
  };

  return (
    <form onSubmit={onFormSubmit}> {/* Escuchar el evento de envío del formulario */}
      <input
        type="text"
        placeholder="Agregar Temas" // Texto de marcador en el input
        value={tema} // El valor del input está controlado por el estado local
        onChange={onInputChange} // Llamar a la función cuando el usuario escribe
      />
    </form>
  );
};
