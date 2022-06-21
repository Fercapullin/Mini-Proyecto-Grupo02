import React, { useState, useEffect } from "react";
import Identity from "@arc-publishing/sdk-identity";
import "../Css/Login.css";

export const AppRegistro = () => {
  const urlBase = "https://api-sandbox.elcomercio.pe";
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);
  const [dataRegistro, setdataRegistro] = useState({
    emailResgister: "",
    passwordRegister: "",
    nameRegister: "",
    patsurnameRegister: "",
    matsurnameRegister: "",
    tlfRegister: "",
    tipodocRegister: "",
    numdocRegister: "",
  });
  //cuando carge la apk cargara la libreria de Identity
  useEffect(() => {
    Identity.apiOrigin = urlBase;
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setdataRegistro({
      // ... hace una copia
      ...dataRegistro,
      [name]: value,
    });
  };

  const handleClick = () => {
    const {
      emailResgister,
      passwordRegister,
      nameRegister,
      patsurnameRegister,
      matsurnameRegister,
      tlfRegister,
      tipodocRegister,
      numdocRegister,
    } = dataRegistro;
    //metodo dentro de la libreria
    Identity.signUp(
      {
        userName: emailResgister,
        credentials: passwordRegister,
        password: "password",
      },
      {
        firstName: nameRegister,
        lastName: patsurnameRegister,
        secondLastName: matsurnameRegister,
        displayName: emailResgister,
        email: emailResgister,
        contacts: [
          {
            phone: tlfRegister,
            type: "HOME",
          },
        ],
        attributes: [
          {
            name: "typeDocument",
            value: tipodocRegister,
            type: "String",
          },
          {
            name: "document",
            value: numdocRegister,
            type: "String",
          },
        ],
      }
    )
      .then((res) => {
        setUser(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      {user ? (
        <p>Tu cuenta fue creada correctamente</p>
      ) : (
        <form className="form">
          <h1>Registrate de manera gratuita!</h1>
          <div className="form-container">
            <div className="form-group">
              <input
                onChange={handleChange}
                id="login-username"
                name="emailResgister"
                placeholder=" "
                className="form-input"
              />
              <label htmlFor="login-username" className="form-label">
                Correo Electronico
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                id="Login-password"
                name="passwordRegister"
                placeholder=" "
                type="password"
                className="form-input"
              />
              <label
                htmlFor="Login-password"
                type="email"
                className="form-label"
              >
                Password
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                id="Register-name"
                name="nameRegister"
                placeholder=" "
                type="text"
                className="form-input"
              />
              <label htmlFor="Register-name" className="form-label">
                Nombres:{" "}
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                id="Register-surnameP"
                name="patsurnameRegister"
                placeholder=" "
                type="text"
                className="form-input"
              />
              <label htmlFor="Register-surnameP" className="form-label">
                Apellido Paterno:{" "}
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                id="Register-surname"
                name="matsurnameRegister"
                placeholder=" "
                type="text"
                className="form-input"
              />
              <label htmlFor="Register-surname" className="form-label">
                Apellido Materno:{" "}
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                id="Register-tlf"
                name="tlfRegister"
                placeholder=" "
                type="text"
                className="form-input"
              />
              <label htmlFor="Register-tlf" className="form-label">
                Telefono:{" "}
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                id="Register-tipdni"
                name="tipodocRegister"
                placeholder=" "
                type="text"
                className="form-input"
              />
              <label htmlFor="Register-tipdni" className="form-label">
                Tipo de Documento:{" "}
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                id="Register-nrodni"
                name="numdocRegister"
                placeholder=" "
                type="text"
                className="form-input"
              />
              <label htmlFor="Register-nrodni" className="form-label">
                Número de Documento:{" "}
              </label>
            </div>
          </div>

          <button onClick={handleClick} type="button" name="btnLogin" className="form-button">
            Registrarme
          </button>

          {error && <p> {error} </p>}
        </form>
      )}
    </>
  );
};
