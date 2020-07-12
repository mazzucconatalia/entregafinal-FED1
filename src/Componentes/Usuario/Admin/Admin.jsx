import React from 'react';
import './CssAdmin.css';
import Calendario from './Calendario';
import FormularioComentarios from './Comentarios/FormularioComentarios';
import Tareas from './listaDeTareas/Tareas';


function Admin() {

    return (

        <div className="contenedor-admin">
            <div className="contenedor-titulo">
                <h2>SEGUIMIENTO DE PROYECTOS</h2>
                <h3>Rombú, tienda ecológica</h3>
            </div>

            <Tareas />
            <div className="contenedor-comentarios">
                <FormularioComentarios />
            </div>
            <Calendario />
        </div>
    )
}

export default Admin;