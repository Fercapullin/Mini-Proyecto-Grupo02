import React, { useState, useEffect } from "react";
import Identity from "@arc-publishing/sdk-identity";


export const Profile = () => {
   
    const urlBase = "https://api-sandbox.elcomercio.pe";
    const [user, setUser] = useState(false);
    const [error,setError] = useState(false);
    const [dataRegistro, setdataRegistro] = useState({
        emailResgister: '',
        passwordRegister: '',
        nameRegister: '',
        patsurnameRegister : '',
        matsurnameRegister: '',
        tlfRegister : '',
        tipodocRegister : '',
        numdocRegister : '',
    })
    //cuando carge la apk cargara la libreria de Identity
    useEffect(() => {
         Identity.apiOrigin = urlBase;
    })

    const handleChange = (e) => {
        const {value, name} = e.target;
        setdataRegistro({
             // ... hace una copia
             ...dataRegistro,
             [name] : value,
         });
     };
      
     const handleClick = () =>{
        const {emailResgister, passwordRegister,nameRegister,patsurnameRegister,matsurnameRegister,tlfRegister,tipodocRegister,numdocRegister}  =dataRegistro
        //metodo dentro de la libreria
        Identity.signUp(
        {
            userName : emailResgister,
            credentials : passwordRegister,
            password : "password"
        },{
            firstName: nameRegister,
            lastName: patsurnameRegister,
            secondLastName: matsurnameRegister,
            displayName: emailResgister,
            email: emailResgister,
            contacts: [
                {
                    phone: tlfRegister,
                    type: "HOME"
                }
            ],
            attributes: [
                
                {
                    name: "typeDocument",
                    value: tipodocRegister,
                    type: "String"
                },
                {
                    name: "document",
                    value: numdocRegister,
                    type: "String"
                }
            ]
        }) 
        .then( (res) => {
            setUser(true);
        }).catch( error => {
            setError(error.message)
        })
     }
 

  return (
    <section>
    {
        user ? ( <p>Tu cuenta fue creada correctamente</p> ) : (

    <div className="form-wrapper">  
        <form className="form">
          <label htmlFor="login-username">Correo Electronico</label>
          <input onChange= {handleChange}  id="login-username" name="emailResgister" placeholder="Ingresa tu correo"/>

          <label htmlFor="Login-password" type="email" >Password</label>
          <input onChange= {handleChange}  id="Login-password" name="passwordRegister" placeholder="Ingresa tu contraseña" type="password"/>

          <label htmlFor="Register-name">Nombres: </label>
          <input onChange= {handleChange}  id="Register-name" name="nameRegister" placeholder="Ingresa tu nombre" type="text"/>

          <label htmlFor="Register-surnameP">Apellido Paterno: </label>
          <input onChange= {handleChange}  id="Register-surnameP" name="patsurnameRegister" placeholder="Ingresa tu apellido materno" type="text"/>

          <label htmlFor="Register-surname">Apellido Materno: </label>
          <input onChange= {handleChange}  id="Register-surname" name="matsurnameRegister" placeholder="Ingresa tu apellido paterno" type="text"/>        

          <label htmlFor="Register-tlf">Telefono: </label>
          <input onChange= {handleChange}  id="Register-tlf" name="tlfRegister" placeholder="Ingresa tu telefono" type="text"/>
         
          <label htmlFor="Register-tipdni">Tipo de Documento: </label>
          <input onChange= {handleChange}  id="Register-tipdni" name="tipodocRegister" placeholder="Ingresa tu tipo de Documento" type="text"/>

          <label htmlFor="Register-nrodni">Número de Documento: </label>
          <input onChange= {handleChange}  id="Register-nrodni" name="numdocRegister" placeholder="Ingresa tu número de Documento" type="text"/>
          
          <button onClick={handleClick} type="button" name="btnLogin" >Registrarme</button>
           
         {
            error && ( <p> {error} </p> )
         }
        </form>
    </div>
             
        )
    }
    </section>
  );
};
