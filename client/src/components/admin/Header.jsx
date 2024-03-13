import React from 'react'
// import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
//   from 'react-icons/bs'
// import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Header({ OpenSidebar, children }) {
  return (
    <div className='admin-header h'>

      <header className='header1'>
        {/* <div className='menu-icon'>
          <BsJustify className='icon' onClick={OpenSidebar} />
        </div> */}
        <Link className="navbar-brand me-2" to="/">
          <img
            // src={logo}
            src='https://i.pinimg.com/originals/e3/dd/e0/e3dde082bc270d83e2cd6b71ae233c77.png'
            // height={90}
            alt="skjh"
            // loading="lazy"
            style={{ marginTop: "-8px", marginBottom: "-8px", height: "50px"}}
          />
        </Link>
        {/* <div className='header-right'>
          <BsPersonCircle className='icon' />
        </div> */}
      </header>
      {children}
    </div>
  )
}

export default Header