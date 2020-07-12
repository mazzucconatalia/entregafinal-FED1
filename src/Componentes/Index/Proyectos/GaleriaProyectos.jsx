import React from 'react';
import CssGaleriaProyectos from './CssGaleriaProyectos.css';
import Proyecto from './Proyecto.jsx';
import { useEffect } from 'react';


function GaleriaProyectos() {

    const [proyectos, cambiarProyectos] = React.useState([]);
    const [categoriaActual, cambiarCategoria] = React.useState('Todos');

    React.useEffect(function () {
        fetch('http://localhost:4000/proyectos')
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (respuestaJSON) {
                cambiarProyectos(respuestaJSON);
            })
    }, []);

    const proyectosFiltrados = proyectos.filter(function (proyecto) {
        return proyecto.categoria.includes(categoriaActual);
    })


    const listaProyectos = proyectosFiltrados.map(function (proyecto) {

        return <Proyecto nombre={proyecto.nombre} categoria={proyecto.categoria} img={proyecto.img} link={proyecto.link} id={proyecto.id} key={proyecto.nombre} />
    })

    const cambiarCategoriaGrafico = function () {
        cambiarCategoria('Gráfico')
    }

    const cambiarCategoriaEditorial = function () {
        cambiarCategoria('Editorial')
    }
    const cambiarCategoriaWeb = function () {
        cambiarCategoria('Web')
    }

    const cambiarCategoriaMarca = function () {
        cambiarCategoria('Marca')
    }

    const cambiarCategoriaTodos = function () {
        cambiarCategoria('Todos')
    }

    const sinProyectos = <div className="sin-proyectos">No hay proyectos en este momento</div>

    return (
        <main id="portfolio">

            <div className="portfolio-titulo">
                <h1> MI PORTFOLIO </h1>
                <h3>ALGUNOS DE MIS ÚLTIMOS TRABAJOS</h3>
                <div className="categorias"><button onClick={cambiarCategoriaGrafico}>Gráfico</button><button onClick={cambiarCategoriaWeb}>Web</button><button onClick={cambiarCategoriaMarca}>Marca</button><button onClick={cambiarCategoriaEditorial}>Editorial</button><button onClick={cambiarCategoriaTodos}>Todos</button></div>
            </div>

            <div className="galeria">
                {(listaProyectos.length > 0) ? listaProyectos : sinProyectos}
            </div>
        </main>

    )
}


export default GaleriaProyectos;