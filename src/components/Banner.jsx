import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/skills.json')
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.skillId}>
            <div className="relative h-[420px] flex items-center justify-center text-center">
              {/* 🖼️ Background Image with blur */}
              <img
                src={skill.image}
                alt={skill.skillName}
                className="absolute inset-0 w-full h-full object-cover blur-[2px] brightness-75"
              />

              {/* 📝 Overlay Text */}
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                  {skill.category}
                </h1>
                <p className="text-lg mt-2 text-gray-100 font-medium">
                  {skill.skillName}
                </p>
              </div>

              {/* Optional overlay dark layer */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
