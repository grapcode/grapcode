import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';

import MyProfile from '../pages/MyProfile';
import MyLoading from '../components/MyLoading';

import SkillsDetails from '../pages/SkillsDetails';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/skills/:id',
        element: <SkillsDetails />,
        loader: () => fetch('/skills.json'),
        hydrateFallbackElement: <MyLoading />,
      },
      {
        path: '/myProfile',
        element: <MyProfile />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/*',
        element: (
          <h2 className="text-4xl font-bold text-red-500 text-center mt-40">
            Error 404
          </h2>
        ),
      },
    ],
  },
  //   {
  //     path: '/auth',
  //     element: <h2>Authentication Layout</h2>,
  //   },
]);
