import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../../styles.css';
import '../../Css/cabecera.css'

export const Navbar = () => {
    return (
        <nav className="header">
            <NavLink className="logo" to={"/"}><div className="div_news">News <span className="span_news">App</span></div></NavLink>
            <div>
                <Link className="category_button" to={"business"}>Negocios</Link>
                <Link className="category_button" to={"entertainment"}>Entretenimiento</Link>
                <Link className="category_button" to={"general"}>General</Link>
                <Link className="category_button" to={"health"}>Salud</Link>
                <Link className="category_button" to={"science"}>Ciencia</Link>
                <Link className="category_button" to={"sports"}>Deportes</Link>
                <Link className="category_button" to={"technology"}>Tecnologías</Link>
            </div>
            <ul className="main-menu">
            
                <Link to="login" className="button"> Iniciar Sesion </Link>
                <Link to="registro" className="button"> Registrate </Link>
            
            <i className="menu-icono fa-solid fa-bars"></i>
            </ul>
        </nav>
    )
}
