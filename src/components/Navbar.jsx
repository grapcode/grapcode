import React from 'react';
import { Link, NavLink } from 'react-router';
import MyLink from './MyLink';
import logo from '../assets/logo1.png';
import MyContainer from './MyContainer';

const Navbar = () => {
  const link = (
    <>
      <li>
        <MyLink to="/">Home</MyLink>
      </li>
      <li>
        <MyLink to="/myProfile">My-Profile</MyLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-200 shadow-sm">
      <MyContainer>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {' '}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{' '}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            {/* ⚡ logo */}
            <Link to={'/'} className="flex items-center cursor-pointer">
              <img className="h-8 mr-2" src={logo} alt="" />
              <a className="text-2xl font-bold bg-linear-to-r from-[#1428bf] to-[#ff5cf4] text-transparent bg-clip-text">
                Grapcode
              </a>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary">SignUp</a>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
