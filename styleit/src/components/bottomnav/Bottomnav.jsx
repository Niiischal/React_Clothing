import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GiConverseShoe } from 'react-icons/gi'
import { ImMan, ImWoman } from 'react-icons/im'
import { MdContactPage } from 'react-icons/md'
import './bottomnav.css'

const Bottomnav = () => {
  return (
    <div>
      <nav>
        <a href="/"><AiOutlineHome/></a>
        <a href="/"><ImMan/></a>
        <a href="/"><ImWoman/></a>
        <a href="/"><GiConverseShoe/></a>
        <a href="/"><MdContactPage/></a>
      </nav>
    </div>
  )
}

export default Bottomnav
