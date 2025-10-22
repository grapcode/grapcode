import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <div className="text-center h-96 ">
              <img
                className="w-full h-80 object-cover"
                src="https://i.ibb.co.com/0pwhpkS2/photo-1525201548942-d8732f6617a0.jpg"
                alt=""
              />
              <h1
                className="text-2xl font-bold py-1 bg-linear-to-r from-[#1428bf] to-[#ff5cf4] text-white 
            "
              >
                Music
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center h-96">
              <img
                className="w-full h-80 object-cover"
                src="https://i.ibb.co.com/VYPg89dx/photo-1503676260728-1c00da094a0b.jpg"
                alt=""
              />
              <h1
                className="text-2xl font-bold py-1 bg-linear-to-r from-[#1428bf] to-[#ff5cf4] text-white 
            "
              >
                Language
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center h-96">
              <img
                className="w-full h-80 object-cover"
                src="https://i.ibb.co.com/RV0GRTN/photo-1499951360447-b19be8fe80f5.jpg"
                alt=""
              />
              <h1
                className="text-2xl font-bold py-1 bg-linear-to-r from-[#1428bf] to-[#ff5cf4] text-white 
            "
              >
                Technology
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center h-96">
              <img
                className="w-full h-80 object-cover"
                src="https://i.ibb.co.com/23mxHN8P/pexels-daiangan-102127.jpg"
                alt=""
              />
              <h1
                className="text-2xl font-bold py-1 bg-linear-to-r from-[#1428bf] to-[#ff5cf4] text-white 
            "
              >
                Art
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
