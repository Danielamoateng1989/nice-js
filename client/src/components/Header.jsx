import React from 'react'
import {FaBars, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import {links} from '../navItems'

const Header = () => {
   
  return (
    <nav>
        <div className="nav-container">
            <div className="nav-header">
                <img src={} alt="Nice company logo" />
                <button className="toggle">
                   <FaBars />
                </button>
            </div>
        </div>
        
        <div className="links-container">
        <ul className="links">

            {links.map(link => {
                const {id, text, url} = link
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
    </nav>
    
  )
}

export default Header