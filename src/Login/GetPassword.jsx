import React, { useState, useEffect } from "react";
import Identity from "@arc-publishing/sdk-identity";

export const GetPassword = () => {
  const urlBase = "https://api-sandbox.elcomercio.pe";

  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [dataLogin, setdataLogin] = useState({
    emailLogin: "",
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
    const { emailLogin } = dataLogin;
    //metodo dentro de la libreria
    Identity.requestResetPassword(emailLogin)
      .then((res) => {
        setSucess(true);
      })
      .catch((error) => {
        setError(
          error
        );
      });
  };

  return (
    <section>
      {sucess ? (
        <p>Se a enviado un correo para restablecer la contraseña</p>
      ) : (
        <div className="form-wrapper">
          <form className="form">
            <label htmlFor="login-username">Correo Electronico</label>
            <input
              onChange={handleChange}
              id="login-username"
              name="emailLogin"
              placeholder="Ingresa tu correo"
            />
            <button onClick={handleClick} type="button" name="btnLogin">
              Recuperar Cuenta
            </button>
            {error && <p> {error} </p>}
          </form>
        </div>
      )}
    </section>
  );
};
