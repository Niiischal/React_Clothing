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
      ...
    </div>
  </div>
</div>
    </div>
    <h1>StyleIt</h1>
    <div className="search">
      <div>
    <a data-coreui-toggle="offcanvas" href="#offcanvasExample1" role="button" aria-controls="offcanvasExample1"><FiSearch className='search_icon' type='search'/></a>
    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      ...
    </div>
  </div>
</div>
    </div>
    <div>
    <a data-coreui-toggle="offcanvas" href="#offcanvasExample2" role="button" aria-controls="offcanvasExample2"><AiOutlineShoppingCart className='cart_icon'/></a>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      ...
    </div>
  </div>
</div>
    </div>
</div>
</div>
</>
  )
}

export default Topnav
