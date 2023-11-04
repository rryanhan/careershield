import React from 'react'
import Navbar from '../navbar/Navbar'
import Aibot from "./Aibot"
import "./legal.css"

const Legal = () => {
  return (
    <div>
    <Navbar/>

    <div className='legal-main'>
      <div className= "legal-header"> Legal Documentation</div>
      <div className= "legal-title">AI Employment-Orientated Chatbot</div>
      <div className= "legal-description"> Use our chatbot to get resources and links directly about the issues you are facing in your workplace, whether it is regarding harassment, lack of employee benefits, overworking, and more!</div>  
    </div>
    <div className='legal-chatbot'>
      <Aibot/>
    </div>
  
    </div>

  )
}

export default Legal