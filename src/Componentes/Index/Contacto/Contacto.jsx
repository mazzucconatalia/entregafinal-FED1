import React from 'react';
import CssContacto from './CssContacto.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function Contacto() {


    const [contacto, editarContacto] = React.useState({
        nombre: '',
        email: '',
        telefono: 0,
        mensaje: ''
    });


    const enviarForm = function (e) {

        e.preventDefault();
        if (!contacto.nombre || !contacto.email || !contacto.mensaje) {
            toast.error('Falta algún dato requerido!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            fetch('http://localhost:4000/contacto', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(contacto)
            })
            toast.success('El mensaje fue enviado correctamente!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const enviarNombre = function (evento) {
        editarContacto({ ...contacto, nombre: evento.target.value });
    }

    const enviarEmail = function (evento) {
        editarContacto({ ...contacto, email: evento.target.value });
    }

    const enviarTel = function (evento) {
        editarContacto({ ...contacto, telefono: evento.target.value });
    }

    const enviarMensaje = function (evento) {
        editarContacto({ ...contacto, mensaje: evento.target.value });
    }

    return (
        <section id="contacto">
            <div className="formulario">
                <h1>CONTACTO</h1><br />
                <div>
                    <form className="contacto-form" onSubmit={enviarForm}>
                        <input className="form nombre" type="text" onChange={enviarNombre} id="name" aria-label="Name" placeholder="Nombre *" />
                        <input className="form email" type="email" onChange={enviarEmail} id="mail" aria-label="Email" placeholder="Email *" />
                        <input className="form tel" type="tel" onChange={enviarTel} id="tel" aria-label="Phone Number" placeholder="Telefono / celular" />
                        <textarea className="mensaje form" onChange={enviarMensaje} id="msg" aria-label="Message" placeholder="Mensaje *"></textarea>
                        <button type="submit" className="boton-form  form">Enviar mensaje</button>
                    </form>
                </div>
            </div>
            <span className="img-fondo-formulario"></span>
        </section>

    )
}

export default Contacto;
