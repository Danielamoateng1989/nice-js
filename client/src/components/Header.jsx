import React, { useState} from 'react'
import {FaBars, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import logo from '../images/NICE.png'
import {links} from '../navItems'



const Navbar = () => {
const [showLinks, setShowLinks] = useState(false)



return (
  <React.Fragment>
  <nav>

    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="Daniel logo"></img>
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

     
     <ul className="social-icons">
          <li>
            <a href="https://twitter.com/danny_bee3">
             <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/daniel-amoateng-959a27181/">
             <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/Danielamoateng1989">
              <FaGithub />
            </a>
          </li>
        </ul>
    </div>
</nav>
  </React.Fragment>
  
   

  
  
    
   
    
  )
}

export default Navbar