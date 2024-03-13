import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useUserContext from '../../context/UserContext';
import useProductContext from '../../context/ProductContext';


const Navbar = () => {

  const { getCartItemsCount } = useProductContext();

  const { loggedIn, logout } = useUserContext();
  console.log(loggedIn);
  const showLoggedin = () => {
    if (loggedIn) {
      return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button style={{ fontFamily:"initial"}} className="btn btn-danger ms-3" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>


      );
    } else {
      return <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4 ">
          <Link type="button" className="fw-bold btn btn-outline-primary text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 fs-7 font-medium" to="/user/signup" style={{fontFamily:"initial"}}>
            Signup
          </Link>

          <Link role='button' className=" btn btn-primary text-white fw-bold fs-7 px-4" to="/user/login" style={{fontFamily:"initial"}} >
            Login
          </Link>
          {/* <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                  <Link
                    href=""
                    to={"/user/adminsignup"}
                    className=" text-white rounded-md px-1 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                   AdminSignup
                  </Link>




                </div>

              </div>
      
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                  <Link
                    href=""
                    to={"/user/adminlogin"}
                    className=" text-white rounded-md px-1 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                   AdminLogin
                  </Link>




                </div>

              </div> */}
        </div>
      </div>
    }
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/*
         Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="" to={"/user/home"}>
                  <img
                    className="h-10 w-auto rounded-full"
                    src='https://i.pinimg.com/originals/e3/dd/e0/e3dde082bc270d83e2cd6b71ae233c77.png'
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-6">

                  <Link  style={{fontFamily:"initial"}}
                    href=""
                    to={"/"}
                    className=" fw-bold ms-5 text-white rounded-md px-1 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </Link>




                </div>

              </div>
             
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                  <Link style={{fontFamily:"initial"}}
                    href=""
                    to={"/user/adminlogin"}
                    className="fw-bold text-white rounded-md px-1 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                   AdminLogin
                  </Link>




                </div>

              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">

                  <Link style={{fontFamily:"initial"}}
                    href=""
                    to={"/user/kit"}
                    className="fw-bold text-white rounded-md px-1 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                   Kit
                  </Link>




                </div>

              </div>
            

            </div>
            <Link
              className=" me-3 dropdown-toggle hidden-arrow text-white fs-4"
              to="/user/cart"
              aria-expanded="false"
            >
              <i className="bi bi-cart text-white   "></i>
              <span className="badge badge-notification px-1" style={{ fontFamily: "initial" }}>{getCartItemsCount()}</span>
            </Link>
            {showLoggedin()}
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Signup
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Login
            </a>

          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar