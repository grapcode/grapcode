import React, { Suspense } from 'react';
import MyContainer from '../components/MyContainer';
import Banner from '../components/Banner';

import Skills from './Skills';
import MyLoading from '../components/MyLoading';
import FAQ from './Faq';

const Home = () => {
  return (
    <div className="my-5">
      <MyContainer>
        <Banner />

        <Suspense fallback={<MyLoading />}>
          <Skills />
        </Suspense>
        <FAQ />
      </MyContainer>
    </div>
  );
};

export default Home;
