import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import './topnav.css'

const Topnav = () => {
  return (
<>
<div className="container top">
    <CgProfile className='profile_icon'/>
    <h1>StyleIt</h1>
    <div className="search">
    <FiSearch className='search_icon'/>
    <AiOutlineShoppingCart className='cart_icon'/>
</div>
</div>
</>
  )
}

export default Topnav
