import { useState } from 'react'
import './admin.css'
// import Header from './admin/Header'
// import Sidebar from './admin/Sidebar'
// import Home from './Base'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Admin = () => {
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} > <Outlet /> </Header>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
      </div>
      
    </div>
  )
}

export default Admin