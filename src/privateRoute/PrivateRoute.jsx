import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { CircleLoader } from 'react-spinners';
import MyLoading from '../components/MyLoading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // 📍 current location thek onno jagay pathate
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <MyLoading></MyLoading>;
  }

  if (!user) {
    return <Navigate to="/signin" state={location.pathname} />;
  }
  return children;
};

export default PrivateRoute;
