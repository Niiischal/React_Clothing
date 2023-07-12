import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { GiConverseShoe } from 'react-icons/gi'
import { ImMan, ImWoman } from 'react-icons/im'
import './bottomnav.css'

const Bottomnav = () => {
  return (
    <div>
      <nav>
        <a href="/"><AiOutlineHome/></a>
        <a href="/"><ImMan/></a>
        <a href="/"><ImWoman/></a>
        <a href="/"><GiConverseShoe/></a>
        <a href="/"><AiOutlineUser/></a>
      </nav>
    </div>
  )
}

export default Bottomnav
