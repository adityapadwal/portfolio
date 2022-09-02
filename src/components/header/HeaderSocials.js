import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aditya-padwal/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a>
        <a href="https://github.com/adityapadwal" target="_blank" rel="noreferrer"> <FaGithub/> </a>
        <a href="https://twitter.com/Aditya_Padwal31" target="_blank" rel="noreferrer"> <ImTwitter/> </a>
    </div>
  )
}

export default HeaderSocials