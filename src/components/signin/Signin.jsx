import React from 'react'
import logo from '../../assets/logo.png';
import penguin from "../../assets/penguin-front.png"
import { Link} from "react-router-dom"
import './signin.css'

const Signin = () => {
  return (
    <div className='signin-main'>
      <div className="logo"> <img src={logo}></img></div>
      <div className='left-right-content'>
      <div className='signin-left-content'>
        <div className='signin-text'>Your First Steps Into the <br/> 
        Workforce Starts Here!</div>
       <div className='signin-textbox'>

        <label className="email">Email:</label>
        <input type="text" id="name" name="name" />

        <label className="password">Password:</label>
        <input type="password" id="password" name="password" />

        </div>
        <Link to= "/Search-For-Jobs"><button class="signin-button">Sign-in</button></Link>
      </div>
      <div className='signin-right-content'>
      <img src={penguin}></img>
      </div>
      </div>
      
      </div>
  )
}

export default Signin