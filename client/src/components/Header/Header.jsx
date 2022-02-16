import React, { useState} from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/nice.png'
import {links} from '../../navItems'



const Navbar = () => {
const [showLinks, setShowLinks] = useState(false)



return (
  <React.Fragment>
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
          <li key={id}>
          <a href={url}> 
              {text}
            </a>
          </li>
          )
       })} 
      </ul>
    </div>
    </div>
</nav>
  </React.Fragment>
  
   

  
  
    
   
    
  )
}

export default Navbar