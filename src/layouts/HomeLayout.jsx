import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
