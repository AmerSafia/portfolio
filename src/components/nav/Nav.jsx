import './nav.css'
import React from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail,} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import { useState } from 'react'
const Nav = () => {
const [activeNav,setActveNav]=  useState('#Home')
  return (
    <nav>
      <a href="#Home" onClick={()=>setActveNav('#Home')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActveNav('#about')} className={activeNav==='#about'?'active':''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href="#protofile" onClick={()=>setActveNav('#protofile')} className={activeNav==='#protofile'?'active':''}><BsFillPersonFill/></a>
      <a href="#contact" onClick={()=>setActveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav