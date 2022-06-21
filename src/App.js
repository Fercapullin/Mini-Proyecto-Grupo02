import React from 'react'
import { News } from './Componentes/News';
import { NewsContextProvider } from './NewContext'
import { Routers } from './Routers';
import "./styles.css"


export const App = () =>{
    return (
        <NewsContextProvider>
           <Routers/>
        </NewsContextProvider>
      );
}
