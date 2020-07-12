import React, { useState } from 'react';
import './CssUsuario.css';
import {
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Usuario() {

  const [usuario, cambiarUsuario] = useState({
    email: "",
    contraseña: "",
  });

  const [sesionIniciada, cambiarASesionIniciada] = React.useState(false);


  function añadirEmail(e) {
    cambiarUsuario({ ...usuario, email: e.target.value });
  }


  function añadirContraseña(e) {
    cambiarUsuario({ ...usuario, contraseña: e.target.value });
  }

  function iniciarSesion() {
    if (usuario.email === 'rombu@gmail.com' && usuario.contraseña === '1234') {
      cambiarASesionIniciada(true)
    }
    else {
      toast.error('El email y/o la contraseña no es/son correctos!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  if (sesionIniciada === true) { return <Redirect to="/Admin" /> };

  return (

    <div className="usuario" style={{ backgroundImage: 'url(./fondo-usuario.jpg)' }}>

      <div id="card">
        <div id="contenido-card">
          <div id="titulo-card">
            <h1>INICIAR SESIÓN</h1>
            <div className="subrayado-titulo"></div>
            <br />
            <p>ACCESO EXCLUSIVO PARA CLIENTES</p>
          </div>


          <form className="form-usuario" onSubmit={iniciarSesion}  >

            <input id="email" className="form-contenido" type="email" name="email" autoComplete="on" placeholder="Email" required onChange={añadirEmail} />

            <input id="contraseña" className="form-contenido" type="password" name="password" placeholder="Contraseña" required onChange={añadirContraseña} />

            <input id="submit" type="submit" name="submit" value="INGRESAR" />

            <a href="#" id="mensaje-problema">Problemas para iniciar sesión</a>
          </form>

        </div>

      </div>
    </div>

  );
}

export default Usuario;