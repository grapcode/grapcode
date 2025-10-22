import React, { Suspense } from 'react';
import MyContainer from '../components/MyContainer';
import Banner from '../components/Banner';

import Skills from './Skills';

const Home = () => {
  return (
    <div className="my-5">
      <MyContainer>
        <Banner />

        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Skills />
        </Suspense>
      </MyContainer>
    </div>
  );
};

export default Home;
