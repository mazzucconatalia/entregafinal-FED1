import React, { useState } from 'react';

function Comentarios({ AñadirComentario }) {

    const [comentarios, cambiarComentarios] = useState({
        id: "",
        nombre: "",
        mensaje: "",
    });

    function añadirMensajes(e) {
        cambiarComentarios({ ...comentarios, mensaje: e.target.value });
    }

    function añadirNombre(e) {
        cambiarComentarios({ ...comentarios, nombre: e.target.value });
    }

    function manejarSubmit(e) {
        e.preventDefault();
        if (comentarios.mensaje.trim()) {
            AñadirComentario({ ...comentarios, id: comentarios.mensaje })
            cambiarComentarios({ ...comentarios, mensaje: "", nombre: "" })
        }
    }

    return (

        <div >
            <h3>COMENTARIOS O SUGERENCIAS</h3>
            <form onSubmit={manejarSubmit}>
                <input name="nombre" type="text" placeholder="Nombre" onChange={añadirNombre} value={comentarios.nombre} />
                <textarea className="añadir-comentario" name="mensaje" type="text" placeholder="Añadir un comentario" onChange={añadirMensajes} value={comentarios.mensaje} />
                <button type="submit">Añadir</button>
            </form>
        </div>


    )
}



export default Comentarios; 
