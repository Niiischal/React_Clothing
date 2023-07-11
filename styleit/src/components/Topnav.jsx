import React from 'react'
import './topnav.css'

const Topnav = () => {
  return (
<>
<div className="container top">
    <h1>StyleIt.</h1>
    <div className="search">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
    <a href="#" className='btn'>Search</a>
</div>
</div>
</>
  )
}

export default Topnav
