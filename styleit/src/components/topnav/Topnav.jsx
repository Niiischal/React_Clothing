import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import './topnav.css'

const Topnav = () => {
  return (
<>
<div className="container top">
  <div>
    <a data-coreui-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><CgProfile className='profile_icon'/></a>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-coreui-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
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
