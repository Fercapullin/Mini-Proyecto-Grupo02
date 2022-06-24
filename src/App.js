import React from 'react'
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
