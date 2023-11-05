import React from 'react'
import logo from '../../assets/logo.png';
import work from "../../assets/work.png"
import workshops from "../../assets/workshops.png"
import legal from "../../assets/legal.png"
import resources from "../../assets/resources.png"
import profile from "../../assets/profile.png"
import { Link} from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-main'>
      <Link to= "/Search-For-Jobs"><img className="navbar-logo" src={logo}></img></Link>
      <div className='navbar-links'>
        <Link to= "/Search-For-Jobs"><img src={work}></img></Link>
        <Link to= "/Workshops"><img src={workshops}></img></Link>
        <Link to= "/Legal"><img src={legal}></img></Link>
        <Link to="/Resource"><img src={resources}></img></Link>
        <img src={profile}></img>
      </div>
    </div>
  )
}

export default Navbar