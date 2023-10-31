import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import meetingworkshop from "../../assets/workshoppics/meetingworkshop.png";
import resumeworkshop from "../../assets/workshoppics/resumeworkshop.png";
import uxworkshop from "../../assets/workshoppics/uxworkshop.png";
import infobutton from "../../assets/workshoppics/infobutton.png";
import interest from "../../assets/workshoppics/interest.png";

import "./slideshow.css"

const buttonStyle = {
  width: "100px",
  background: 'none',
  border: '0px',

};

const arrowStyle = {
  fill: '#E59A4B',
  
};

const properties = {
  prevArrow: (
      <button className="customButtonStyleLeft" style={{ ...buttonStyle }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={arrowStyle}>
              <path d="M10 18 6 12 10 6 8.59 4.58 2.59 12 8.59 19.41z" />
          </svg>
      </button>
  ),
  nextArrow: (
      <button className="customButtonStyleRight" style={{ ...buttonStyle }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={arrowStyle}>
              <path d="M14 6 18 12 14 18 15.41 19.41 21.41 12 15.41 4.59z" />
          </svg>
      </button>
  )
};



const slideImages = [
  {
    workshopimg: uxworkshop,
    caption: "Intro to UX/UI",
    description: "Explore practical UX/UI foundations in our beginner workshop, covering wireframing, user research, and design principles. Learn to create user-friendly interfaces and solve real-world problems in this fast-growing field."
  },
  {
    workshopimg: meetingworkshop,
    caption: "Learn to Network",
    description: "Calling all young and aspiring proffesionals! Dive into the world of networking and learn about communication, discover how to build meaningful connections, and learn to navigate the professional world confidently."
  },
  {
    workshopimg: resumeworkshop,
    caption: "Resume Building!",
    description: "Craft an impressive resume early in your career and stand out from the crowd! Join our 'Resume Building' workshop to master the art of impactful resumes, grab attention with key details, and land your dream opportunities.",
  },
];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '362px',
  maxWidth: '718px',
  margin: '0 auto', 
  borderRadius: "25px"
};

const spanStyle = {
  fontSize: "20px",
  color: "black",
  fontFamily: "Manrope",
  fontWeight: "700",
};
const descriptionStyle = {
  fontSize: "16px",
  color: "#black", 
  fontFamily: "Sora", 
  fontWeight: "200",
};

const SimpleSlider = () => {
  return (
    <div className="slider-main">
      <Fade{... properties}>
        {slideImages.map((image, index) => (
          <div className="slider-divstyle" key={index} style={{ ...divStyle, backgroundImage: `url(${image.workshopimg})` }}>
            <div className='slider-overlay'>
            <div className='slider-rectangle'>
              <div className='slider-body'>
                <span style={spanStyle}>{image.caption}</span>
                <p className="description-text" style={descriptionStyle}>{image.description}</p>

                <div className='bottom-buttons'>
                  <div className='see-more'>
                    <img src={infobutton}></img>
                  </div>
                  <div className='interest'>
                    <img src={interest}></img> </div>
                  </div>

              </div>

              
            </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SimpleSlider;
