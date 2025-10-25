import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const Signin = () => {
  // 🔰 get authProvider Func
  const {
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFunc,

    user,
    setUser,
    setLoading,
  } = useContext(AuthContext);

  // 🔰 After successful signin, navigate to home page
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || '/';
  console.log(from);

  // 🎯  Forgot password
  //   const [email, setEmail] = useState(null);
  const emailRef = useRef(null);

  // ⚡ show password
  const [show, setShow] = useState(false);

  // ♻️ user signin thakle -- signin dekhabe na
  if (user) {
    navigate('/');
  }

  // ⚡ handle signin/login btn
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // ⚡ signin with email
    // signInWithEmailAndPassword(auth, email, password)
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);
        // 🍁 form signup 3rd: sendEmailVerification condition
        // if (!res.user.emailVerified) {
        //   toast.error('Your email is not verified.');
        //   setUser(null);
        //   return;
        // }
        const user = res.user;
        toast.success('Sign up was successful.');
        setUser(user);
        navigate('/');
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  // 🎯 handle Forgot password
  const handleForgotPassword = () => {
    const email = emailRef.current?.value;
    navigate('/forgot-password', { state: { email } });
  };
  // const handleForgotPassword = () => {
  //   // console.log(emailRef.current.value);
  //   const email = emailRef.current.value;
  //   // sendPasswordResetEmail(auth, email)
  //   sendPasswordResetEmailFunc(email)
  //     .then(() => {
  //       setLoading(false);
  //       toast.success('Check your email to reset password');
  //     })
  //     .catch((e) => {
  //       toast.error(e.message);
  //     });
  // };

  //   💥 google signin

  const handleGoogleSignin = () => {
    setLoading(true);
    signInWithGoogleFunc()
      .then((res) => {
        setLoading(false);
        toast.success('google signin successful');
        setUser(res.user);
        navigate('/');
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  //   console.log();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center pt-6 font-bold ">Welcome Back</h1>
        {/* ⚡ form */}

        <form onSubmit={handleSignin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              // 🎯 Forgot password email value: system-2
              ref={emailRef}
              // 🎯 Forgot password email value: system-1
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
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
            {/* 🎯 Forgot password */}
            <div>
              <span
                to="/forgot-password"
                onClick={handleForgotPassword}
                className="link link-hover"
              >
                Forgot password?
              </span>
            </div>
            {/* login btn */}
            <button className="btn btn-primary border-0 hover:bg-[#ac55e2] mt-4">
              Login
            </button>

            {/* 💥 Google btn */}
            <button
              type="button"
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
      </div>
    </div>
  );
};

export default Signin;
