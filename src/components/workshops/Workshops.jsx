import React, {Component} from 'react'
import Navbar from '../navbar/Navbar'
import Slider from "react-slick";
import SimpleSlider from './SimpleSlider';
import workshopex from "../../assets/workshoppics/workshopex.png"
import youthworkplace from "../../assets/workshoppics/youthworkplace.png"
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
                <div className="searchbar">
                    <img src={workshopsearch}></img>
                    <img className='workshop-button' src={workshopbutton}></img>
                </div>
                <div className='workplace-index'>
                    <div className="workshopex"><img src={workshopex}></img></div>
                    <div className="youthworkplace"><img src={youthworkplace}></img></div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Workshops