import React from 'react';
import ListaComentarios from './ListaComentarios';
import Comentarios from './Comentarios';
import { useState, useEffect } from 'react';


function FormularioComentarios() {

    const [comentarios, cambiarComentarios] = useState([]);

    function AñadirComentario(comentario) {
        cambiarComentarios([comentario, ...comentarios]);
    }

    React.useEffect(function () {
        fetch('http://localhost:4000/comentariosRombu', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(comentarios)
        })
    }, [comentarios]);

  
    function borrarComentario(id) {
        return (
            cambiarComentarios(comentarios.filter(comentario => comentario.id !== id))
        )
    };


    return (

        <>
            <Comentarios AñadirComentario={AñadirComentario} />
            <ListaComentarios comentarios={comentarios} borrarComentario={borrarComentario} />
        </>
    )

}

export default FormularioComentarios;