import React from 'react'
import './footer.css'
import {ImTwitter} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>Aditya Padwal</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Academics</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/Aditya_Padwal31" target="_blank" rel="noreferrer"><ImTwitter /></a>
        <a href="https://www.linkedin.com/in/aditya-padwal/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/adityapadwal" target="_blank" rel="noreferrer"> <FaGithub/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aditya Padwal. All Rights Reserved.</small>
      </div>
    </footer>
    
  )
}

export default Footer