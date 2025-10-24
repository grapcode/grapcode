import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import MyLink from './MyLink';
import logo from '../assets/logo1.png';
import MyContainer from './MyContainer';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FadeLoader } from 'react-spinners';

const Navbar = () => {
  // 🔰 get user from authProvider
  const { user, setUser, signoutUserFunc, loading, setLoading } =
    useContext(AuthContext);
  console.log(user);

  // ⚡ handle sign out btn
  const handleSignout = () => {
    // signOut(auth)
    signoutUserFunc()
      .then(() => {
        toast.success('Signout success!');
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
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
            {/* 💥 user condition */}
            {loading ? (
              <FadeLoader />
            ) : user ? (
              <div className="relative text-center p-1 flex justify-center items-center gap-5">
                {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                {/* For TSX uncomment the commented types below */}
                <button
                  className="cursor-pointer "
                  popoverTarget="popover-1"
                  style={
                    { anchorName: '--anchor-1' } /* as React.CSSProperties */
                  }
                >
                  <img
                    className="h-15 w-15 rounded-full"
                    src={
                      user?.photoURL ||
                      'https://img.icons8.com/?size=80&id=108652&format=png'
                    }
                    alt=""
                  />
                </button>
                {/* under div is dropdown */}
                <div
                  className="absolute top-2 -left-17 dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                  popover="auto"
                  id="popover-1"
                  style={
                    {
                      positionAnchor: '--anchor-1',
                    } /* as React.CSSProperties */
                  }
                >
                  <p className="text-lg font-semibold">{user?.displayName}</p>
                </div>

                <button onClick={handleSignout} className="btn btn-primary">
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-row gap-2">
                <NavLink to="/signin" className="btn bg-gradient text-white">
                  Login
                </NavLink>

                <NavLink to="/signup" className="btn btn-primary">
                  SignUp
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
