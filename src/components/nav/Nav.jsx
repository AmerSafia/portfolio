import './nav.css'
import React from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'
const Nav = () => {
const [activeNav,setActveNav]=  useState('#Home')
  return (
    <nav>
      <a href="#Home" onClick={()=>setActveNav('#Home')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActveNav('#about')} className={activeNav==='#about'?'active':''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href="#services" onClick={()=>setActveNav('#services')} className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav