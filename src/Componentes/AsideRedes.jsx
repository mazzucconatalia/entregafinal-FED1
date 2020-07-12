import React from 'react';
import {
    BrowserRouter as Router,
    useLocation,
} from "react-router-dom";

function AsideRedes() {

    let location = useLocation();

    return (

        <aside className={location.pathname.includes('/proyectos') ? "aside-redes-proyectos" : "aside-redes"}>
            <ul>
                <li> <a href="#"><img src="/iconos/redes-fb.svg" /></a></li>
                <li> <a href="#"><img src="/iconos/redes-inst.svg" /></a></li>
                <li> <a href="#"><img src="/iconos/redes-pin.svg" /></a></li>
                <li> <a href="#"><img src="/iconos/redes-wp.svg" /></a></li>
            </ul>
        </aside>

    )
};

export default AsideRedes;