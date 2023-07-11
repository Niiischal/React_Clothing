import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './topnav.css'

const Topnav = () => {
  return (
<>
<div className="container top">
    <h1>StyleIt.</h1>
    <div className="search">
    <FiSearch className='search_icon'/>
</div>
</div>
</>
  )
}

export default Topnav
