import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../../styles.css';
import '../../Css/cabecera.css'

export const Navbar = () => {
    return (
        <nav className="header">
            
            <NavLink className="logo" to={"/"}><div className="div_news">News <span className="span_news">App</span></div></NavLink>
            <i className="search fa-solid fa-magnifying-glass"></i>
            <ul>
                 <li>  <Link className="category_button" to={"business"}>Negocios</Link> </li>
                 <li>  <Link className="category_button" to={"entertainment"}>Entretenimiento</Link> </li>
                 <li>  <Link className="category_button" to={"general"}>General</Link> </li>
                 <li>  <Link className="category_button" to={"health"}>Salud</Link> </li>
                 <li>  <Link className="category_button" to={"science"}>Ciencia</Link> </li>
                 <li>  <Link className="category_button" to={"sports"}>Deportes</Link></li>
                 <li>  <Link className="category_button" to={"technology"}>Tecnologías</Link></li>
                 <li>  <Link to="login" className="category_button"> Iniciar Sesion </Link>    </li>       
            </ul>
            <i className=" fa-solid fa-bars"></i>
        </nav>
    )
}
