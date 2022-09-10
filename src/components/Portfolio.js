import "./PortfolioStyles.css"
import React, { useEffect, useState } from 'react'
import BB from "../assets/Portraits/BB.jpg"
import IMG_4548 from "../assets/Portraits/IMG_4548.jpg"
import IMG_5008 from "../assets/Portraits/IMG_5008.jpg"
import IMG_6477 from "../assets/Portraits/IMG_6477.jpg"
import IMG_6865 from "../assets/Portraits/IMG_6865.jpg"
import IMG_7610 from "../assets/Portraits/IMG_7610.jpg"
import IMG_7924 from "../assets/Portraits/IMG_7924.jpg"
import IMG_8097 from "../assets/Portraits/IMG_8097.jpg"
import IMG_4494 from "../assets/Documentaries/IMG_4494.JPG"
import IMG_4500 from "../assets/Documentaries/IMG_4500.JPG"
import IMG_4503 from "../assets/Documentaries/IMG_4503.JPG"
import IMG_4505 from "../assets/Documentaries/IMG_4505.JPG"
import IMG_4564 from "../assets/Documentaries/IMG_4564.JPG"
import Carousel from "nuka-carousel/lib/carousel";

const Portfolio = () => {

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

var carouselNumber = () =>  {if (windowSize.innerWidth <= 650) { return 1 } 
  else if (windowSize.innerWidth <= 970){ return 2 } 
  else if (windowSize.innerWidth <= 1322){ return 3 } 
  else if (windowSize.innerWidth <= 1736){ return 4 } 
  else {return 5}}

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="title">Portfolio</h1>

      <div className="card">
        <h3 className="title">Portraits</h3>
        <Carousel 
          wrapAround={true}
          slidesToShow={carouselNumber()}
          cellAlign={'center'}
          animation={"zoom"}
          zoomScale={0.8}
          autoplay={true}
          autoplayInterval={4000}
          speed={800}
          >
            <img className="port-img" src={BB}/>
            <img className="port-img" src={IMG_5008}/>
            <img className="port-img" src={IMG_4548}/>
            <img className="port-img" src={IMG_6477}/>
            <img className="port-img" src={IMG_6865}/>
            <img className="port-img" src={IMG_7610}/>
            <img className="port-img" src={IMG_7924}/>
            <img className="port-img" src={IMG_8097}/>
          </Carousel>
      </div>

      
      

      <div className="card">
        <h3 className="title">Documentaries</h3>
        <Carousel 
          wrapAround={true}
          slidesToShow={carouselNumber()}
          cellAlign={'center'}
          animation={"zoom"}
          zoomScale={0.8}
          autoplay={true}
          autoplayInterval={4000}
          speed={800}>
        <img className="port-img" src={IMG_4494}/>
        <img className="port-img" src={IMG_4500}/>
        <img className="port-img" src={IMG_4503}/>
        <img className="port-img" src={IMG_4505}/>
        <img className="port-img" src={IMG_4564}/>
         </Carousel>
      </div>
      
    </div>
  )
}

export default Portfolio