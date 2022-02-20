import React, { useState} from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/nice.png'
import {links} from '../../navItems'
import styled from 'styled-components'
import {Link } from "react-router-dom"
import { FaUserCircle } from 'react-icons/fa';


const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  color: white;
  border-radius: 20px;
  background-color: #E41E53;
  font-weight: bold;
  height: 30px;
  width: 120px;
  box-shadow: 1px 2px 2px red
    
`
const Navbar = () => {
const [showLinks, setShowLinks] = useState(false)

const username = "Daniel Amoateng"
return (
  
   <nav>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
        <img src={logo} alt="nicelogo" className="logo"></img>
        </Link>
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

    <div className={ `${showLinks ? 'links-container show-container' : 'links-container'} `}>
     
    <div className="user-container">
      
      <div className="user-avatar">
      <FaUserCircle  />
      </div>
     
      <div className="user-name">
      <p className="user-name">{username}</p>
      </div>
      
    </div>
    
    </div>
    <Link to="/login">  
    <Button>Logout</Button>
    </Link>
    
    </div>
</nav>  

  )
}

export default Navbar