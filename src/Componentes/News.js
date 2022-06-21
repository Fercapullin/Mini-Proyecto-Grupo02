import React, { useContext } from "react";
import { NewsContext } from "../NewContext";
import { NewsArticle } from "./NewsArticle";
import "../Css/cabecera.css";
import logo from "../img/logo_app.png";
import { Link } from "react-router-dom";
import '../styles.css'

export const News = (props) => {
  const { data } = useContext(NewsContext);

  return (
    <div className="wrapper" >
      <header className="header">
        <img src={logo} alt="imagen" className="logo" />
        <ul className="main-menu">
          
            <Link to="login" className="button"> Iniciar Sesion </Link>
            <Link to="registro" className="button"> Registrate </Link>
        
          <i className="menu-icon fa-solid fa-bars"></i>
        </ul>
      </header>

      <div className="all_notices">
        {data ? (
          data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        ) : (
          <p>Error de conexion</p>
        )}
      </div>
    </div>
  );
};
