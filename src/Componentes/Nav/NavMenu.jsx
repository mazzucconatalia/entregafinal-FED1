import React from 'react';
import {
    BrowserRouter as Router,
    useLocation,
    Link
} from "react-router-dom";
import { HashLink as Link1 } from 'react-router-hash-link';


function NavItem(props) {
    const [dropDownVisible, setDropDownVisible] = React.useState(false);

    return (
        <li className="dropdown-menu">
            <Link1 smooth to={props.to} onClick={() => setDropDownVisible(!dropDownVisible)}>{props.nombre}</Link1>

            {dropDownVisible && props.children}
        </li>


    );
}

function NavMenu(Props) {

    let location = useLocation();

    const navMenu = <ul className={location.pathname.includes('/proyectos') ? "nav-menu-proyectos" : "nav-menu"}>
        <NavItem nombre="INICIO" to="/" />
        <NavItem nombre="PROYECTOS ︾" >
            <div className="elementos-dropdown-menu">
                <Link to="/">Gráfico</Link>
                <Link to="/" >Web</Link>
                <Link to="/">Marca</Link>
                <Link to="/">Editorial</Link>
                <Link1 to="/path#portfolio">Todos</Link1>
            </div>
        </NavItem>
        <NavItem nombre="CONTACTO" to="/path#contacto" />
        <NavItem nombre="USUARIO" to="/Usuario" /></ul>;

    const [dropDownVisible, setDropDownVisible] = React.useState(false);

    return (
        <>

            <div className={location.pathname.includes('/proyectos') ? "nav-menu-proyectos-contenedor" : "nav-menu-contenedor"}>
                {navMenu}
            </div>

            <input type="checkbox" id="boton-desplegable" />
            <label htmlFor="boton-desplegable" onClick={() => setDropDownVisible(!dropDownVisible)} > <img src="iconos/boton-desplegable.png" alt="" /></label>

            {dropDownVisible && navMenu}
        </>

    )

}

export default NavMenu;