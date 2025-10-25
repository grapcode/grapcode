import React, { useContext, useState } from 'react';
import MyContainer from '../components/MyContainer';
import { AuthContext } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.config';

const MyProfile = () => {
  // 🔰 get user from authProvider
  const { user } = useContext(AuthContext);

  // 🔰 state make
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const [updatedUser, setUpdatedUser] = useState(user);

  // 🔰 update profile function
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success('Profile updated successfully!');

        // 🔰 Firebase user object UI
        const newUser = {
          ...auth.currentUser,
          displayName: name,
          photoURL: photo,
        };
        setUpdatedUser(newUser);
      })
      .catch((e) => {
        toast.error('Error updating profile', e);
      });
  };
  return (
    <div className="my-5 ">
      <MyContainer>
        <h2 className="text-center text-2xl font-bold"> My Profile page</h2>

        {updatedUser && (
          <div className=" border border-fuchsia-500 mx-2 rounded-3xl my-5 text-center p-3 flex flex-col justify-center items-center gap-5">
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}

            <img
              className="h-15 w-15 rounded-full"
              src={
                updatedUser?.photoURL ||
                'https://img.icons8.com/?size=80&id=108652&format=png'
              }
              alt=""
            />

            <p className="text-lg font-semibold">{updatedUser?.displayName}</p>
            <p className="text-lg font-semibold">{updatedUser?.email}</p>
          </div>
        )}

        {/* 🔰 Update Profile form */}
        <div className="flex justify-center border border-indigo-500 mx-2 rounded-3xl my-5 text-center p-3">
          <form
            onSubmit={handleUpdateProfile}
            className="flex flex-col gap-3 mt-3 w-full max-w-sm"
          >
            <h2 className="text-center text-xl font-bold">
              Update profile form
            </h2>
            <input
              type="text"
              placeholder="Enter new name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter new photo URL"
              className="input input-bordered w-full"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-primary border-0 hover:bg-[#ac55e2]"
            >
              Update Profile
            </button>
          </form>
        </div>
      </MyContainer>
    </div>
  );
};

export default MyProfile;
