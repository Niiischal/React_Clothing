import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GiConverseShoe } from 'react-icons/gi'
import { ImMan, ImWoman } from 'react-icons/im'
import { MdContactPage } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import './bottomnav.css'

const Bottomnav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" style={({ isActive }) => ({
          color: isActive ? "var(--color-black)" : "",
          background: isActive ? "rgba(205, 198, 198, 0.4)" : "",
        })}><AiOutlineHome/></NavLink>
        <NavLink to="/men" style={({ isActive }) => ({
          color: isActive ? "var(--color-black)" : "",
          background: isActive ? "rgba(205, 198, 198, 0.4)" : "",
        })}><ImMan/></NavLink>
        <NavLink to="/women" style={({ isActive }) => ({
          color: isActive ? "var(--color-black)" : "",
          background: isActive ? "rgba(205, 198, 198, 0.4)" : "",
        })}><ImWoman/></NavLink>
        <NavLink to="/shoes" style={({ isActive }) => ({
          color: isActive ? "var(--color-black)" : "",
          background: isActive ? "rgba(205, 198, 198, 0.4)" : "",
        })}><GiConverseShoe/></NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({
          color: isActive ? "var(--color-black)" : "",
          background: isActive ? "rgba(205, 198, 198, 0.4)" : "",
        })}><MdContactPage/></NavLink>
      </nav>
    </div>
  )
}

export default Bottomnav
