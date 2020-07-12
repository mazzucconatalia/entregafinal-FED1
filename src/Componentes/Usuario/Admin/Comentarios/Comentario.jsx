import React from 'react';


function Comentario({ comentario, borrarComentario }) {

    function manejarBorrarComentario() {
        borrarComentario(comentario.id)
    }

    return (
        <li className="comentario">
            <button onClick={manejarBorrarComentario}>X</button>
            <li className="nombre">{comentario.nombre}</li>:  <li className="mensaje-comentario">{comentario.mensaje}</li>

        </li>
    )
};

export default Comentario;