
/*import React, { useState, useEffect } from "react";
import Identity from "@arc-publishing/sdk-identity";
import '../Css/Login.css'


export const AppLogin = () => {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);
  const [dataLogin, setdataLogin] = useState({
    emailLogin: "",
    passwordLogin: "",
  });
  //cuando carge la apk cargara la libreria de Identity
  useEffect(() => {
    Identity.apiOrigin = urlBase;
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setdataLogin({
      // ... hace una copia
      ...dataLogin,
      [name]: value,
    });
  };

  const handleClick = () => {
    const { emailLogin, passwordLogin } = dataLogin;
    //metodo dentro de la libreria
    Identity.login(emailLogin, passwordLogin)
      .then((res) => {
        setUser(true);
      })
      .catch((error) => {
        setError(
          "El Correo o contraseña que ha proporcionado no son correctos. Inténtelo de nuevo."
        );
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {user ? (
        <p>Bienvenido a tu cuenta</p>
      ) : (
        <form className="form">
          <h2> Inicia Sesión</h2>
          <p>
                
          </p>
          <div className="form-container">
            <div className="form-group">
              <input 
                onChange={handleChange}
                id="login-username"
                name="emailLogin"
                placeholder=" "
                className="form-input"
              />
              <label htmlFor="login-username" className="form-label">Correo Electronico: </label>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                id="Login-password"
                name="passwordLogin"
                placeholder=" "
                type="password"
                className="form-input"
              />
              <label htmlFor="Login-password" className="form-label"  >Password: </label>
              <br/>
              <button onClick={handleClick} type="button" name="btnLogin" className="form-button">
                Iniciar Sesion
              </button>
              {error && <p> {error} </p>}
            </div>
          </div>
        </form>
      )}
    </>
  );
};
*/
import React, { useState, useEffect } from "react";
import Identity from "@arc-publishing/sdk-identity";
import { Link } from "react-router-dom";
import '../Css/Login.css';

export const AppLogin = () => {
    
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);
  const [dataLogin, setdataLogin] = useState({
    emailLogin: "",
    passwordLogin: "",
  });
  //cuando carge la apk cargara la libreria de Identity
  useEffect(() => {
    Identity.apiOrigin = urlBase;
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setdataLogin({
      // ... hace una copia
      ...dataLogin,
      [name]: value,
    });
  };

  const handleClick = () => {
    const { emailLogin, passwordLogin } = dataLogin;
    //metodo dentro de la libreria
    Identity.login(emailLogin, passwordLogin)
      .then((res) => {
        setUser(true);
      })
      .catch((error) => {
        setError(
          "El Correo o contraseña que ha proporcionado no son correctos. Inténtelo de nuevo."
        );
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };


    return (
        
       
        <div className="general_div_login">
            <div className="container_login">
            <input type="checkbox" id="flip"/>
            <div className="cover">
            <div className="front">
                <img className="img_login" src="https://images.pexels.com/photos/3585074/pexels-photo-3585074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="text">
                <span className="text-1">Tus noticias a tiempo real  <br/>Siempre activo</span>
                <span className="text-2">Conoce mas noticias</span>
                </div>
            </div>
            <div className="back">
                <img className="backImg img_login" src="https://images.pexels.com/photos/3584993/pexels-photo-3584993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="text">
                <span className="text-1">Complete miles of journey <br/> with one step</span>
                <span className="text-2">Let's get started</span>
                </div>
            </div>
            </div>
            <div className="forms">
                <div className="form-content">
                <div className="login-form">
                
                    {user ? (
                        <h1 className="bienvenida">Bienvenido a tu cuenta</h1>
                    ) : (
                      <>
                      <div className="title">Login</div>
                      <form >
                    <div className="input-boxes">
                    <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input onChange={handleChange} type="text" placeholder="Ingresa tu Correo" name="emailLogin" required/>
                    </div>
                    <div className="input-box">
                        <i className="fa-solid fa-lock"/>
                        <input onChange={handleChange}  type="password" placeholder="Ingresa tu Contraseña" name="passwordLogin" required/>
                    </div>
                    <div className="text"><a href="#">Olvidaste tu contraseña?</a></div>
                    <div className="button_login input-box">
                        <input type="submit" value="Ingresar" onClick={handleClick} name="btnLogin"/>
                    </div>
                    <div className="text sign-up-text">No tienes una cuenta? <label htmlFor="flip">Registrate!</label></div>
                    {error && <p> {error} </p>}
                    </div>
                </form>
                      </>
                
                    )}
            </div>
                <div className="signup-form">
                <div className="title">Registrarse</div>
                <form action="#">
                    <div className="input-boxes">
                    <div className="input-box">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Ingresa tu nombre" required/>
                    </div>
                    <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Ingresa tu correo" required/>
                    </div>
                    <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Ingresa tu contraseña" required/>
                    </div>
                    <div className="button_login input-box">
                        <input type="submit" value="Registrarse"/>
                    </div>
                    <div className="text sign-up-text">Ya tienes una cuenta? <label htmlFor="flip">Logeate</label></div>
                    </div>
            </form>
            </div>
            </div>
            </div>
        </div>
      </div>
    )
}