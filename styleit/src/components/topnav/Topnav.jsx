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

    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" className="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div className='profile_photo'>
      <img src="" alt="" />
    </div>
    <div className="profile_content">
      
    </div>
  </div>
</div>
    </div>
    <h1>StyleIt</h1>
    <div className="search">
      <div>
    <a data-coreui-toggle="offcanvas" href="#offcanvasExample1" role="button" aria-controls="offcanvasExample1"><FiSearch className='search_icon' type='search'/></a>
    <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" className="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      ...
    </div>
  </div>
</div>
    </div>
    <div>
    <a data-coreui-toggle="offcanvas" href="#offcanvasExample2" role="button" aria-controls="offcanvasExample2"><AiOutlineShoppingCart className='cart_icon'/></a>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" className="btn-close text-reset" data-coreui-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
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
