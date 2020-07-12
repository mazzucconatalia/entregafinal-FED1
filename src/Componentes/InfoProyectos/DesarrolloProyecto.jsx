import React from 'react';
import { HashLink as Link1 } from 'react-router-hash-link';


function DesarrolloProyecto(props) {

    const mostrarSlider = props.slider.map(function (slide, index) {
        return (
            <li>
                <input type="radio" name="slider-radio" id={`boton${index}`} defaultChecked={index === 0 ? true : false} />
                <label htmlFor={`boton${index}`}></label>
                <img src={slide} />
            </li>
        );
    });


    return (

        <>
            <div className="main-proyectos">
                <div className="main-titulo">
                    <h1> {props.nombre}</h1>
                    <h3>{props.subtitulo}</h3>
                </div>
                <div className="descrip">
                    {props.descripcion}
                </div>
                <div className="grid-abajo">
                    <div className="link">
                        <a href="#">Visita el sitio</a>
                        <a href="#">Visita el instagram</a>
                    </div>
                    <div className="programas">
                        <img src="/iconos/Photoshop.png" alt="Photoshop" />
                        <img src="/iconos/Illustrator.png" alt="Illustrator" />
                        <img src="/iconos/Lightroom.png" alt="Lightroom" />
                    </div>
                </div>
            </div>

            <div id="nav2">
                <div className="titulo">
                    <h3>{props.nombre}</h3>
                    <p>I</p>
                    <p>{props.subtitulo}</p>
                </div>
                <Link1 to="/path#portfolio" className="volver"><img src="/iconos/atrasatras-01.svg" /></Link1>
                <Link1 to="/path#portfolio" className="atras"><img src="/iconos/atras-01.svg" /></Link1>
                <Link1 to="/path#portfolio" className="adelante"><img src="/iconos/adelante-01.svg" /></Link1>
            </div>
            <section>
                <ul className="slider">
                    {mostrarSlider}
                </ul>
            </section>
        </>

    )
};


export default DesarrolloProyecto; 
