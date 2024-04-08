
// Import Swiper React components


// Import Swiper styles
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import town from '../../../public/bannarImages/townhouse.jpg'
import apartment from '../../../public/bannarImages/apartment.jpg'
import student from '../../../public/bannarImages/student.jpg'



// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
const Bannar = () => {
    return (
        <div className="">
            <Swiper navigation={true} loop = {true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}>
                <SwiperSlide>
                    <div className='h-[calc(100vh-70px)]'>
                        <img src={town} className='h-full w-full object-cover' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-70px)]'>
                        <img src={apartment} className='h-full w-full object-cover' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-70px)]'>
                        <img src={student} className='h-full w-full object-cover' alt="" />
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Bannar;