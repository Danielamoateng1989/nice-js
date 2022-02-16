import React, { useState} from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/nice.png'
import {links} from '../../navItems'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  color: white;
  border-radius: 4px;
  background-color: #E41E53;
  font-weight: bold;
  height: 30px;
  width: 90px;
  box-shadow: 3px 4px 10px red
    
`
const Navbar = () => {
const [showLinks, setShowLinks] = useState(false)
return (
  
   <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="nicelogo" className="logo"></img>
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

    <div className={ `${showLinks ? 'links-container show-container' : 'links-container'} `}>
     
     <ul className="links">
     {links.map(link => {
         const {id, text,url} = link
       
          return (
          <div key={id}>
          <li>
          <a href={url}> 
              {text}
            </a>
          </li>
          </div>
          )
       })} 
      </ul>
      
    </div>
    <Button>Login</Button>
    </div>
</nav>  

  )
}

export default Navbar