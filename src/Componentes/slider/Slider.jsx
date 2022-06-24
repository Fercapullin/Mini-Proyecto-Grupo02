
import React from 'react'
import { useContext } from 'react'
import {Carousel} from 'react-responsive-carousel'
import { NewsContext } from '../../NewContext'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../slider/slider.css'

export const Slider = () => {
    const {slideFiveNews} = useContext(NewsContext);
    
    
  return (
  <Carousel showArrows={true} className="main-slider">
    { 
       slideFiveNews.articles && slideFiveNews.articles.map(( item, index ) => (
          <div key={index}>
             <img src= {item.urlToImage} alt="..." />
              <p className="legend">{item.title}</p>
          </div>
       ))
    }
</Carousel>
  )
}
