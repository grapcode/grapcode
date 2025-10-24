import React, { useContext } from 'react';
import MyContainer from '../components/MyContainer';
import { AuthContext } from '../context/AuthContext';

const MyProfile = () => {
  // 🔰 get user from authProvider
  const { user, setUser } = useContext(AuthContext);
  return (
    <div className="my-5">
      <MyContainer>
        <h2>Thi is My Profile page</h2>
      </MyContainer>
    </div>
  );
};

export default MyProfile;
