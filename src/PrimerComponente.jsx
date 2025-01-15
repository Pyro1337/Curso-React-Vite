import React from "react";
import './PrimerComponente.css'
import PropTypes from 'prop-types'
//Creacion de las variables de los componentes de manera Global
const objeto = {
  name: "Sergio",
  apellido: "Garcia",
  edad: 23,
  profesion: "Desarrollador de Software",
};
const fecha = new Date(); //retorna la fecha actual
export const PrimerComponente = ({Titulo, Subtitulo, Numero}) => {
  return (
    //Se utiliza el <> y </> para poder renderizar el HTML
    <>
      <h1>Funcion que devuelve mas de 1 resultado</h1>
      {/*Se coloca el objeto con llaves para poder acceder a sus propiedades pero este nos da error pues no puede ser renderizado por lo que hay que usar json.stringify*/}
      <h2>{JSON.stringify(objeto)}</h2>
      {/*Lo mismo pasa con las fechas que no pueden ser renderizadas y deben usarse el JSON.Stringify para convertirlo a cadena */}
      <h2>{JSON.stringify(fecha)}</h2>
      <h2>Titulo : {Titulo} - Subtitulo : {Subtitulo} - Numero : {Numero + 12}</h2>
    </>
  );
};

//Realizamos las validaciones mediante PropTypes, en caso de no traer algo lanzara un mensaje en la consola del navegador.
PrimerComponente.propTypes = {
    Titulo : PropTypes.string.isRequired,
    Subtitulo : PropTypes.string.isRequired,
    Numero : PropTypes.number.isRequired,
}

//Ahora le asignamos los valores por defecto en caso que no traiga algo.
PrimerComponente.defaultProps = {
    Titulo : "Blank title",
    Subtitulo : "Blank subtitle",
    Numero : 999
}