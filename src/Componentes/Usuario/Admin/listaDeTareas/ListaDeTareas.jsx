import React, { useState } from 'react';

function ListaDeTareas(props) {


    const listaTareas = props.tareas.map(function (tarea, index) {
        return (
            <li
                style={{
                    backgroundColor: tarea.progreso === "En Proceso" ? "rgba(235, 235, 235, 0.4)" : null,
                }}
            >
                <p className="lista-tareas-numero"> {index}</p>
                <p className="lista-tareas-nombre">
                    {tarea.nombre}
                </p>
                <p>
                    {tarea.progreso}
                </p>
            </li>
        );
    });

    return (
        <>
            <div className="titulo-tareas">
                <h3>LISTA DE TAREAS</h3>
                <h4>Etapa: {props.etapa}</h4>
                <p>Tareas</p><p>Progreso</p>
            </div>
            <ul className="lista-tareas">
                {listaTareas}
            </ul>

        </>



    )
};

export default ListaDeTareas;