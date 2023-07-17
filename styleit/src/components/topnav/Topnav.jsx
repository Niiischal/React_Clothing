import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import './topnav.css'

const Topnav = () => {
  const [visible, setVisible] = useState(false)
  return (
<>
<div className="container top">
<CButton className="d-lg-none" onClick={() => setVisible(true)}><a href=""><CgProfile className='profile_icon'/></a></CButton>
<CAlert className="d-none d-lg-block" color="info">Resize your browser to show the responsive offcanvas toggle.</CAlert>
    <COffcanvas backdrop="static" placement="start" visible={visible} onHide={() => setVisible(false)}>
      <COffcanvasHeader>
        <COffcanvasTitle>Responsive offcanvas</COffcanvasTitle>
        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
      </COffcanvasHeader>
      <COffcanvasBody>
        This is content within an <code>.offcanvas-lg</code>.
      </COffcanvasBody>
    </COffcanvas>
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
