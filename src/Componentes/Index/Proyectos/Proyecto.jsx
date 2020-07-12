import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";




function Proyecto(props) {


    return (
        <div className='proyecto'>
            <div className="overlay-proyecto"></div>
            <Link to={`/proyectos/${props.link}`}><img className="img-proyecto" src={props.img} alt="" />
                <div className="detalle-proyecto fadeIn-boton">
                    <h3>{props.nombre}</h3><p>Categorías: {props.categoria[0]} {props.categoria[1]} {props.categoria[2]}</p><br /> <p className="ver-mas"> ver más →</p>
                </div>
            </Link>

        </div>

    );
}

export default Proyecto;
