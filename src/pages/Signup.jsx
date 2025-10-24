import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
  // 🔰 get authProvider Func
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    setLoading,
    signoutUserFunc,
    setUser,
  } = useContext(AuthContext);

  // 🔰 After successful signup, navigate to login page
  const navigate = useNavigate();

  // ⚡ show password
  const [show, setShow] = useState(false);

  // ⚡ handle signup btn
  const handleSignup = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(displayName, photoURL, email, password);

    if (password.length < 6) {
      toast.error('Password should be at least 6 digit');
      return;
    }

    // ⚡1st: signup with email
    // createUserWithEmailAndPassword(auth, email, password)
    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        // ❄️ 2nd: updateProfile --> old --> vs --> updateProfileFunc(displayName, photoURL)
        // updateProfile(res.user, {
        //   displayName,
        //   photoURL,
        // })
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            // 🍁 3rd: sendEmailVerification
            // sendEmailVerification(res.user)
            sendEmailVerificationFunc()
              .then(() => {
                const user = res.user;
                setLoading(false);

                // ⚡ signout user
                signoutUserFunc().then(() => {
                  toast.success(
                    'Account created successfully!. Check your email to validate your account.',
                    user
                  );
                  setUser(null);
                  navigate('/signin');
                });
              })
              .catch((e) => {
                toast.error(e.message);
              });
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e.code);
        if (e.code == 'auth/email-already-in-use') {
          toast.error('User already exist in database');
        } else {
          toast.error(e.message);
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center pt-6 font-bold ">
          Create Your Account
        </h1>
        {/* ⚡ form */}
        <form onSubmit={handleSignup} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />
            {/* photo URL */}
            <label className="label">Photo-URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />
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

            <button className="btn btn-primary mt-4">Register</button>
            <p className="text-sm text-black/60">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="text-pink-500 hover:text-indigo-500 font-medium underline"
              >
                Sign In
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signup;
