import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import MyLink from './MyLink';
import logo from '../assets/logo1.png';
import MyContainer from './MyContainer';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FadeLoader } from 'react-spinners';
import { IoReorderThreeOutline } from 'react-icons/io5';

const Navbar = () => {
  // 🔰 get user from authProvider
  const { user, setUser, signoutUserFunc, loading } = useContext(AuthContext);
  // console.log(user);

  // 🔰 After successful signin, navigate to home page
  // const navigate = useNavigate();

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

  const links = (
    <>
      <li>
        <MyLink to="/">Home</MyLink>
      </li>
      {user && (
        <li>
          <MyLink to="/myProfile">My-Profile</MyLink>
        </li>
      )}
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
                <IoReorderThreeOutline size={30} />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            {/* ⚡ logo */}
            <Link to={'/'} className="flex items-center cursor-pointer">
              <img className="h-8 mr-2" src={logo} alt="" />
              <p className="text-2xl font-bold bg-linear-to-r from-[#1428bf] to-[#ff5cf4] text-transparent bg-clip-text">
                Grapcode
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* 💥 user condition */}
          <div className="navbar-end">
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
                    title={user?.displayName}
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

                <button
                  onClick={handleSignout}
                  className="btn btn-primary border-0 hover:bg-[#ac55e2]"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-row gap-2">
                <NavLink
                  to="/signin"
                  className="btn btn-primary border-0 hover:bg-[#ac55e2]"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  className="btn btn-primary border-0 hover:bg-[#ac55e2]"
                >
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
