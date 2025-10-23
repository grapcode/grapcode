import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// 💥 google provider
const googleProvider = new GoogleAuthProvider();

const Signin = () => {
  // ⚡ display te dekhanor jonn
  const [user, setUser] = useState(null);

  // ⚡ show password
  const [show, setShow] = useState(false);

  // ⚡ handle signin/login btn
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // ⚡ signin with email
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        // 🍁 form signup 3rd: sendEmailVerification
        if (!res.user.emailVerified) {
          toast.error('Your email is not verified.');
          return;
        }
        const user = res.user;
        toast.success('Sign up was successful.');
        setUser(user);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  // ⚡ handle sign out btn
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success('Signout success!');
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  //   💥 google signin

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        toast.success('google signin successful');
        setUser(res.user);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  console.log(user);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center pt-6 font-bold ">Welcome Back</h1>
        {/* ⚡ form */}
        {user ? (
          <div className="text-center   space-y-3 p-5">
            <img
              className="mx-auto"
              src={
                user?.photoURL ||
                'https://img.icons8.com/?size=80&id=108652&format=png'
              }
              alt=""
            />
            <p className="text-xl font-semibold">{user?.displayName}</p>
            <p className="text-xl font-semibold">{user?.email}</p>
            <button onClick={handleSignout} className="btn btn-primary">
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleSignin} className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* ⚡ password */}
              <div className="space-y-2 relative">
                <label className="label">Password</label>
                <input
                  type={show ? 'text' : 'password'}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-8 bottom-5 cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {/* login btn */}
              <button className="btn btn-primary mt-4">Login</button>

              {/* 💥 Google btn */}
              <button
                onClick={handleGoogleSignin}
                className="btn mt-2 bg-white text-black border-[#e5e5e5]"
              >
                <FcGoogle />
                Login with Google
              </button>
              <p className="text-sm text-black/60">
                Don't have account?{' '}
                <Link
                  to="/signup"
                  className="text-pink-500 hover:text-indigo-500 font-medium underline"
                >
                  Sign Up
                </Link>
              </p>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signin;
