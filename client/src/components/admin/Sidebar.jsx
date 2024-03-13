import React from 'react'
// import 
// {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
//  from 'react-icons/bs'
 import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand' style={{fontFamily:"initial"}}>
                <h6 className='icon_header'/> DIY
            </div>
            <span className='icon1 close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
           
            <li className='sidebar-list-item'>
                <Link to="/admin/base" style={{fontFamily:"initial"}}>
                    Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/addproduct" style={{fontFamily:"initial"}}>
                Add Product
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/manageproduct" style={{fontFamily:"initial"}}>
                   Manage Product
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/manageuser" style={{fontFamily:"initial"}}>
                     Manage User
                </Link>
            </li>
         </ul>
        <div className='ms-4' style={{marginTop:"250px"}}>
            <Link to={"/user/adminsignup"} className='btn btn-danger' style={{fontFamily:"initial"}}><i className=" px-1 bi bi-box-arrow-left"></i>Logout</Link>
        </div>
    </aside>
  )
}

export default Sidebar