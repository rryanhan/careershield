import React, {Component} from 'react'
import Navbar from '../navbar/Navbar'
import Slider from "react-slick";
import SimpleSlider from './SimpleSlider';
import workshopex from "../../assets/workshoppics/workshopex.png"
import workshopsearch from "../../assets/workshoppics/workshopearch.png"
import workshopbutton from "../../assets/workshoppics/workshopbutton.png"
import "./workshops.css"

const Workshops = () => {
  return (
    <div>
        <Navbar/>
        <div className= "workshop-main">
            <div className= "workshop-header"> Workshops</div>
            <div className= "workshop-title"> Featured Workshops Near You</div>
            <div className= "workshop-description"> Dive into immersive, hands-on sessions led by experts to unlock your potential and master new skills through interactive learning experiences.</div>

            
        </div>
        <SimpleSlider/>

        <div className='workshop-list'>
            <div className='search-for'>Search for a Workshop</div>
            <div>
                <img src={workshopsearch}></img>
                <img src={workshopbutton}></img>
                <img src={workshopex}></img>
            </div>
        </div>


    </div>
  )
}

export default Workshops