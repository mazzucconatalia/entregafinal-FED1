import React from 'react';
import DesarrolloProyecto from './DesarrolloProyecto.jsx';
import AsideRedes from '../AsideRedes';
import './CssProyectos.css';
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";

function Proyectos() {

  const params = useParams()
  const [desarrolloProyectos, cambiarDesarrolloPoyectos] = React.useState([]);

  React.useEffect(function () {
    fetch('http://localhost:4000/proyectos')
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (respuestaJSON) {
        cambiarDesarrolloPoyectos(respuestaJSON);

      })
  }, []);

  const proyectoActual = desarrolloProyectos.find(function (proyecto) {
    return proyecto.link === params.link;
  })

  const mostrarProyecto = function () {
    if (proyectoActual) {
      return <DesarrolloProyecto nombre={proyectoActual.nombre} subtitulo={proyectoActual.subtitulo} descripcion={proyectoActual.descripcion} slider={proyectoActual.slider} />
    } else {
      console.log('cargando')
    }
  }


  return (

    <div className="Contenedor">
      {mostrarProyecto()}
      <AsideRedes />
    </div>


  )
}

export default Proyectos; 
