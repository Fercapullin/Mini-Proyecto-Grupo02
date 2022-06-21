import React,{ createContext, useEffect,useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
     const [data, setData] = useState();
     const apiKey = '3bec5be64c3849c68b276b605ccaefb4';

     useEffect(() => {
         axios.get( `https://newsapi.org/v2/everything?q=tesla&from=2022-05-20&sortBy=publishedAt&apiKey=${apiKey}` 
         )
          .then(response => setData(response.data))
          .catch( error => console.log(error));  
     },[]) 

     return(
        <NewsContext.Provider value = {{data}}>
             {props.children} 
        </NewsContext.Provider>
     )
     
}