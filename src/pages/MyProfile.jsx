import React, { useContext } from 'react';
import MyContainer from '../components/MyContainer';
import { AuthContext } from '../context/AuthContext';

const MyProfile = () => {
  // 🔰 get user from authProvider
  const { user, loading } = useContext(AuthContext);
  return (
    <div className="my-5">
      <MyContainer>
        <h2>Thi is My Profile page</h2>
        {loading ? (
          <FadeLoader />
        ) : user ? (
          <div className=" border rounded-3xl my-5 text-center p-3 flex flex-col justify-center items-center gap-5">
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}

            <img
              className="h-15 w-15 rounded-full"
              src={
                user?.photoURL ||
                'https://img.icons8.com/?size=80&id=108652&format=png'
              }
              alt=""
            />

            <p className="text-lg font-semibold">{user?.displayName}</p>
            <p className="text-lg font-semibold">{user?.email}</p>
            <button className="btn btn-primary">Update Profile</button>
          </div>
        ) : (
          ''
        )}
      </MyContainer>
    </div>
  );
};

export default MyProfile;
