import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import './topnav.css'

const Topnav = () => {
  return (
<>
<div className="container top">
    <a href=""><CgProfile className='profile_icon'/></a>
    <h1>StyleIt</h1>
    <div className="search">
    <a href=""><FiSearch className='search_icon' type='search'/></a>
    <a href=""><AiOutlineShoppingCart className='cart_icon'/></a>
</div>
</div>
</>
  )
}

export default Topnav
