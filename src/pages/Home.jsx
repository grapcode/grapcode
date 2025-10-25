import React, { Suspense } from 'react';
import MyContainer from '../components/MyContainer';
import Banner from '../components/Banner';

import Skills from './Skills';
import MyLoading from '../components/MyLoading';

const Home = () => {
  return (
    <div className="my-5">
      <MyContainer>
        <Banner />

        <Suspense fallback={<MyLoading />}>
          <Skills />
        </Suspense>
      </MyContainer>
    </div>
  );
};

export default Home;
