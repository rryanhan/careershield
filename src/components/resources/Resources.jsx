import React from 'react'
import Navbar from "../navbar/Navbar"
import './resources.css'
import tagicon from "../../assets/searchforjoblogos/tagicon.png"
import heart from "../../assets/searchforjoblogos/heart.png"

const Resources = () => {
  return (
    <div>
      <Navbar/>
      <div class = "header1">
          <h1 class="header">Resources</h1>
        </div>
        <div class = "container"> 
        <p>All Resources</p>
        <p>Career-Guidance</p>
        <p>Career-Specific</p>
        <p>Saved</p>
        </div>
        <div className="search-bar-container">
          <div class="searchbar">
            <div className="pt-search-bar">
              <p>Search by keyword</p>
            </div>
            <div className="tagbar">
              <img src={tagicon} alt=""></img>  
              <p>Add tags</p>
            </div>
          </div>
        </div>
        <div className="jcont">
        <div className="Rbox">
            <p>Workplace Rights Overlooked By Young Employers </p>
            <div className="tagcont">
                <div className="tag1">
                <img src={heart} alt=""></img>
                    <p>107</p>
                </div>
                <div className="tag2">
                    <p>Exploitation</p>
                </div>
                <div className="tag3">
                    <p>Career Rights</p>
                </div>
            </div>
            <div className="Desc">
                <p>
                Explore the lesser-known rights that every employee should know. This insightful guide sheds light on critical workplace entitlements often unnoticed by employers. Arm yourself with this knowledge to ensure you're treated fairly and respectfully in your professional journey.
                </p>
            </div>
        </div>
        <div className="Rbox">
            <p>Workplace Rights Overlooked By Young Employers </p>
            <div className="tagcont">
                <div className="tag1">
                    <img src={heart} alt=""></img>
                    <p>107</p>
                </div>
                <div className="tag2">
                    <p>Exploitation</p>
                </div>
                <div className="tag2">
                    <p>Career Rights</p>
                </div>
            </div>
            <div className="Desc">
                <p>
                Explore the lesser-known rights that every employee should know. This insightful guide sheds light on critical workplace entitlements often unnoticed by employers. Arm yourself with this knowledge to ensure you're treated fairly and respectfully in your professional journey.
                </p>
            </div>
        </div>
        <div className="Rbox">
            <p>Workplace Rights Overlooked By Young Employers </p>
            <div className="tagcont">
                <div className="tag1">
                <img src={heart} alt=""></img>
                    <p>107</p>
                </div>
                <div className="tag2">
                    <p>Exploitation</p>
                </div>
                <div className="tag2">
                    <p>Career Rights</p>
                </div>
            </div>
            <div className="Desc">
                <p>
                Explore the lesser-known rights that every employee should know. This insightful guide sheds light on critical workplace entitlements often unnoticed by employers. Arm yourself with this knowledge to ensure you're treated fairly and respectfully in your professional journey.
                </p>
            </div>
        </div>
        <div className="Rbox">
            <p>Workplace Rights Overlooked By Young Employers </p>
            <div className="tagcont">
                <div className="tag1">
                    <img src={heart} alt=""></img>
                    <p>107</p>
                </div>
                <div className="tag2">
                    <p>Exploitation</p>
                </div>
                <div className="tag2">
                    <p>Career Rights</p>
                </div>
            </div>
            <div className="Desc">
                <p>
                Explore the lesser-known rights that every employee should know. This insightful guide sheds light on critical workplace entitlements often unnoticed by employers. Arm yourself with this knowledge to ensure you're treated fairly and respectfully in your professional journey.
                </p>
            </div>
        </div>
        <div className="Rbox">
            <p>Workplace Rights Overlooked By Young Employers </p>
            <div className="tagcont">
                <div className="tag1">
                <img src={heart} alt=""></img>
                    <p>107</p>
                </div>
                <div className="tag2">
                    <p>Exploitation</p>
                </div>
                <div className="tag2">
                    <p>Career Rights</p>
                </div>
            </div>
            <div className="Desc">
                <p>
                Explore the lesser-known rights that every employee should know. This insightful guide sheds light on critical workplace entitlements often unnoticed by employers. Arm yourself with this knowledge to ensure you're treated fairly and respectfully in your professional journey.
                </p>
            </div>
        </div>
        <div className="Rbox">
            <p>Workplace Rights Overlooked By Young Employers </p>
            <div className="tagcont">
                <div className="tag1">
                <img src={heart} alt=""></img>
                    <p>107</p>
                </div>
                <div className="tag2">
                    <p>Exploitation</p>
                </div>
                <div className="tag2">
                    <p>Career Rights</p>
                </div>
            </div>
            <div className="Desc">
                <p>
                Explore the lesser-known rights that every employee should know. This insightful guide sheds light on critical workplace entitlements often unnoticed by employers. Arm yourself with this knowledge to ensure you're treated fairly and respectfully in your professional journey.
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Resources