import React from 'react';
import Comentario from './Comentario';

function ListaComentarios({ comentarios, borrarComentario }) {
    return (
        < div className="vista-comentarios">
            <ul>
                {comentarios.map(comentario => (
                    <Comentario key={comentario.id} comentario={comentario} borrarComentario={borrarComentario} />
                ))}
            </ul>
        </div>

    )
}

export default ListaComentarios;