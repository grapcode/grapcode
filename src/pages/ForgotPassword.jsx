import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router';

const ForgotPassword = () => {
  const { sendPasswordResetEmailFunc, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState('');

  // 🔰 Signin থেকে email সেট করা
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  // 🔰 handle reset password
  const handleResetPassword = () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    sendPasswordResetEmailFunc(email)
      .then(() => {
        setLoading(false);
        toast.success('Password reset link sent! Check your email. 📧');
        setEmail('');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="text-3xl text-center pt-6 font-bold text-[#ac55e2]">
          Forgot Password
        </h1>

        <div className="card-body">
          <label className="label">Email Address</label>
          <input
            type="email"
            className="input input-bordered mb-3"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleResetPassword}
            className="btn btn-primary border-0 mt-4 hover:bg-[#ac55e2] w-full"
          >
            Send Reset Link
          </button>

          <p className="text-sm mt-3 text-center">
            Remembered your password?{' '}
            <Link
              to="/signin"
              className="text-pink-500 hover:text-indigo-500 underline font-medium"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
