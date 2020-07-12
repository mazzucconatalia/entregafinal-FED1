import React from 'react';
import CssNav from './CssNav.css';
import NavMenu from './NavMenu';
import {
    BrowserRouter as Router,
    useLocation,
    Link
} from "react-router-dom";



function Nav(props) {

    let location = useLocation();


    return (

        <nav className={location.pathname.includes('/proyectos') ? "nav-proyectos" : "nav-Principal"}>
            <div className={location.pathname.includes('/proyectos') ? "nav-logo-proyectos" : "nav-logo"} >
                <Link to="/"><img src="/logo.png" /></Link>
            </div>

            <NavMenu />

            <div className={location.pathname.includes('/proyectos') ? "nav-redes-proyectos" : "nav-redes"}>
                <ul>
                    <li> <a href="#"><img src="/iconos/redes-fb.svg" /></a></li>
                    <li> <a href="#"><img src="/iconos/redes-inst.svg" /></a></li>
                    <li> <a href="#"><img src="/iconos/redes-pin.svg" /></a></li>
                    <li> <a href="#"><img src="/iconos/redes-wp.svg" /></a></li>
                </ul>
            </div>


        </nav>
    )
};

export default Nav;