import React from 'react';
import CssPrincipal from './CssPrincipal.css';
import AsideRedes from '../../AsideRedes';

function Principal() {

    return (
        <div id="grid-pantalla-principal">

            <div id="principal">
                <div className="sobremi">
                    <h3>NM DISEÑO</h3>
                    <p>Estudiante de Diseño de Comunicación Visual en la Facultad de Arquitectura, Diseño y Urbanismo de
                    la Udelar en la ciudad de Montevideo, Uruguay. Además, cursando actualmente en Senpai Academy el
                    curso de Front end Developer.Me desarrollo en distintas areas del diseño como indentidad
                    corporativa, editorial, gráfico y web.</p>
                    <img className="fondo-principal" src="fondo-main1.png" />
                </div>
                <div className="principal-email"> <a href="#">mazzucconatalia@gmail.com</a></div>
            </div>

            <AsideRedes />

            <div id="slider"></div>
            <div className="fondo-color"></div>
            <div className="presentacion">
                <h1> Hola, <br /> soy Natalia <br /> Mazzucco </h1>
                <p> Te invito a conocer algunos de mis trabajos </p>
                <div className="boton-flecha"> <a href="#portfolio"><img src="iconos/flecha.svg" /></a></div>
            </div>

        </div>
    )


}


export default Principal;