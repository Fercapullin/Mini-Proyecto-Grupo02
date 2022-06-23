import React,{ createContext, useEffect,useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
     const [getData, setGetData] = useState([]);
     const [slideFiveNews, setSlideFiveNews] = useState([]);
     const apiKey = '5e092c2e0a6d494f8f633cd145b5b8b1';
     const date = new Date().toLocaleDateString().split('/').reverse().join('-'); 

     useEffect(()=>{
          const getFiveNews = async()=>{
               try {
                    const news = await axios.get(`https://newsapi.org/v2/everything?q=peru&from=${date}&pageSize=5&sortBy=popularity&apiKey=${apiKey}`)
                    const newsData = await news.data;
                    setSlideFiveNews(newsData);
                    console.log(newsData.articles)
               } catch (error) {
                    console.log(error)
               }
               
               }
          getFiveNews()
     },[])

     useEffect(() => {
          const getNews = async()=>{
               try {
                    const news = await axios.get(`https://newsapi.org/v2/everything?q=us&apiKey=${apiKey}`)
                    const newsData = await news.data;
                    setGetData(newsData)
                    console.log(newsData.articles);
               } catch (error) {
                    console.log(error)
               }
               
          }
         getNews();
     },[]) 

     return(
        <NewsContext.Provider value={{
          getData,
          slideFiveNews
        }}>
             {props.children} 
        </NewsContext.Provider>
     )
     
}