import React from 'react'
import Navbar from "../navbar/Navbar"
import './searchjobs.css'
import filtersymbol  from "../../assets/searchforjoblogos/filtersymbol.png"
import msymbol  from "../../assets/searchforjoblogos/image 9.png"
import fstar  from "../../assets/searchforjoblogos/fstar.png"
import estar  from "../../assets/searchforjoblogos/estar.png"
import starbuck  from "../../assets/searchforjoblogos/starbucks.png"

const Searchjobs = () => {
  return (
    <div>
        <Navbar/>
        <div class = "header1">
          <h1 class="header">Search for Jobs</h1>
        </div>
        <div class = "container"> 
        <p>Browse All</p>
        <p>Saved</p>
        </div>
        <div className="big-container">
        <div className="search-bar-container">
          <div class="searchbar">
            <div className="pt-search-bar">
              <p>Add position titles</p>
            </div>
            <div className="l-search-bar">
              <p>Add a location</p>
            </div>
          </div>
          </div>
        </div>
        <div className="filter-bar-container">
        <div className="filter">
          <img src={filtersymbol} alt=""></img>
           <p>Add more filters</p>
        </div>
        </div>
        <div class="job-opp">
        <div class="box">
        <div class="image-container">
          <img src={msymbol} alt=""></img>
            <p>Microsoft (221,000 employees)</p>
          <img src={fstar} alt=""></img>
          <img src={fstar} alt=""></img>
          <img src={fstar} alt=""></img>
          <img src={fstar} alt=""></img>
          <img src={estar} alt=""></img>
          </div>
          <div class='tags-container'>
          <div className='tag2'>
            <p>Internship</p>
          </div>
          <div className='tag2'>
            <p>Remote Only</p>
          </div>
          </div>
          <div className="jobcont">
          <div className="job1">
            <p>Software Engineering Intern</p>
          </div>
          <div className="job2">
            <p>Machine Learning Intern</p>
          </div>
        <div className="job2">
          <p>Product Management Intern</p>
        </div>
        </div>
        </div>
        <div class="box2">
        <div class="image-container">
        <img src={starbuck} alt=""></img>
          <p>Starbucks (383,000 employees)</p>
          <img src={fstar} alt=""></img>
          <img src={fstar} alt=""></img>
          <img src={fstar} alt=""></img>
          <img src={estar} alt=""></img>
          <img src={estar} alt=""></img>
        </div>
        <div class='tags-container'>
          <div className='tag2'>
            <p>Part Time</p>
          </div>
          <div className='tag2'>
            <p>In Person Only</p>
          </div>
          </div>
          <div className="job1">
            <p>Barista</p>
          </div>
          <div className="job2">
            <p>Customer Service Representative</p>
          </div>
          <div className="job2">
            <p>Waiter</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Searchjobs