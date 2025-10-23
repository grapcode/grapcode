import React from 'react';
import { Link } from 'react-router';

const Signup = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create Your Account</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
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
                placeholder="Photo url"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

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
    </div>
  );
};

export default Signup;
