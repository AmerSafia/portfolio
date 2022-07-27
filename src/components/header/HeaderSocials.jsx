import React from 'react'
import { BsLinkedin,BsGithub,BsFacebook } from 'react-icons/bs';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/amer-safia-b463a115a/" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/AmerSafia" target='_blank' rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://www.facebook.com/amer.safia" target='_blank' rel="noopener noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials