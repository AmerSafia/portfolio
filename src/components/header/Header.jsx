import './header.css'
import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id='Home'>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Amer Safia </h1>
        
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
        {/*eslint-disable-next-line */}
          <img src='./assets/me.jpg'></img>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
export default Header