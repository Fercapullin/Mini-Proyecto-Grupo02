import React, { useContext, useEffect, useRef, useState } from 'react';
import { NewsContext } from '../../NewContext';
import './slider.css';


const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FFBB28", "#FFBB28"];
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const { slideFiveNews } = useContext(NewsContext);

    console.log(slideFiveNews[slideFiveNews.length])

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === 5 - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);

    return (
        <div className="div_slidershow">
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {slideFiveNews.articles && slideFiveNews.articles.map((news, index) => (
                        <div className="slide" key={index}>
                            <img
                                src={news.urlToImage}
                                className="img_five_news"
                            />
                            <div className="news_five_title">
                                <h2>{news.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="slideshowDots">
                    {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                        setIndex(idx);
                        }}
                    ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Slideshow;