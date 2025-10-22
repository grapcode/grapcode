import React from 'react';
import hero from '../assets/hero.jpg';

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-5 p-3 md:gap-20 my-10">
        <img src={hero} className=" rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Affordable learning awaits take the leap today!
          </h1>
          <p className="py-5">
            Start, switch, or advance your career with more than 5,800 courses,
            Professional Certificates, and degrees from world-class universities
            and companies. Fuel your professional progression with tailored
            learning to help you take each step towards your future.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
