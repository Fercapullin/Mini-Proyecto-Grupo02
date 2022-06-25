import React, { useContext } from "react";
import { NewsContext } from "../../NewContext";
import { NewsArticle } from "../newsArticles/NewsArticle";
import { Slider } from "../slider/Slider";
import { Navbar } from '../navbar/Navbar';
import '../../styles.css'
import './news.css'

export const News = () => {
    const { getData } = useContext(NewsContext);

    return (
        <div className="wrapper" >
            <Navbar/>
            <Slider/>
            <div className="all_notices">
                {getData.articles ? (
                getData.articles.map((news) => (
                    <NewsArticle data={news} key={news.url} />
                ))
                ) : (
                <p>Loading...</p>
                )}
            </div>
        </div>
    );
};
