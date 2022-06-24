import React, { useState, useEffect } from "react";
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
