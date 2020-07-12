import React from 'react';
import { useEffect } from 'react';
import ListaDeTareas from './ListaDeTareas';

function Tareas() {

    const [listaDeTareas, cambiarListaDeTareas] = React.useState([]);


    React.useEffect(function () {
        fetch('http://localhost:4000/tareasRombu')
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (respuestaJSON) {
                cambiarListaDeTareas(respuestaJSON);
            })
    }, []);

    const etapaActual = listaDeTareas.find(function (tarea) {
        return tarea.progreso === "Trabajando";
    })


    const mostrarTareas = function () {
        if (etapaActual) {
            return <ListaDeTareas etapa={etapaActual.etapa} tareas={etapaActual.tareas} />
        } else {
            console.log('cargando')
        }
    }


    return (
        <div className="contenedor-lista-tareas">
            {mostrarTareas()}
        </div>
    )
};

export default Tareas;