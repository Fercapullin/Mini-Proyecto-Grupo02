import React,{ createContext, useEffect,useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
     const [getData, setGetData] = useState([]);
     const [slideFiveNews, setSlideFiveNews] = useState([]);
     const apiKey = '2c8d1fe384c142558c2ccf54f4b0cb62';
     const URL_API_SOURCE = "https://newsapi.org/v2/top-headlines?country=us&category="
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
                    const news = await axios.get(`https://newsapi.org/v2/everything?q=cusco&pageSize=20&apiKey=${apiKey}`)
                    const newsData = await news.data;
                    setGetData(newsData)
                    console.log(newsData.articles);
               } catch (error) {
                    console.log(error)
               }
               
          }
         getNews();
     },[]) 

     const getNewsSources = async(source)=>{
          try {
               const data = await axios.get(`${URL_API_SOURCE}${source}&apiKey=${apiKey}`);
               const newsSource = await data.data.articles;
          
               console.log(newsSource);
               return newsSource;
               
          } catch (error) {
               console.log(error);
          }
     }
     

     return(
        <NewsContext.Provider value={{
          getData,
          slideFiveNews,
          getNewsSources,
        }}>
             {props.children} 
        </NewsContext.Provider>
     )
     
}