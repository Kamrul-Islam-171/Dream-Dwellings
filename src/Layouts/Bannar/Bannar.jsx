
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
            <Swiper navigation={true} loop={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}>
                <SwiperSlide>

                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className=' absolute top-1/3 md:left-1/4 lg:left-1/4 left-10 space-y-4'>
                            <h1 className='text-5xl font-bold  text-white'>Modern TownHouses</h1>
                            <p className='text-white w-[90%] md:w-4/5 lg:w-3/4'>Discover upscale living at our Modern Townhouses. Elevate your lifestyle with sleek architecture and premium amenities.</p>
                        </div>
                        <img src={'https://i.ibb.co/3BszTf2/kyoto-display-home-interior-rejuvenations-img-6211a8f40c3fc125-14-3381-1-ad79b5f.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Family Houses</h1>
                            <p className='text-white w-[90%] md:w-4/5 lg:w-3/4'>Welcome to your dream home for your Family. We offer the perfect blend of space, comfort, and warmth. Create lasting memories in a home designed for your family's happiness.</p>
                        </div>
                        <img src={'https://i.ibb.co/KVJqJkJ/3-beautiful-family-portrait-smiling-outside-their-new-house-with-s-anek-suwannaphoom.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4  absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Luxury Apartments</h1>
                            <p className='text-white w-[90%] md:w-4/5 lg:w-3/4'>Embark on a journey of lavish living at our Luxury Apartments, Where every space is crafted with the utmost care, offering a sanctuary of opulence and grandeur.</p>
                        </div>
                        <img src={'https://i.ibb.co/M5FbfQ3/a914e336ecb850e59424e7fa90cd9be9.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-to-tr from-[#000000CC] to-[#00000059] h-[calc(100vh-200px)]">

                        <div className='space-y-4 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Rent The Right Vacation Home</h1>
                            <p className='text-white w-[90%] md:w-4/5 lg:w-3/4'>Unwind in your dream getaway. Our Vacation Homes beckon with comfort and charm, offering the perfect backdrop for unforgettable moments. Experience relaxation redefined as you indulge in the ultimate escape.</p>
                        </div>
                        <img src={'https://i.ibb.co/0FqdW1T/vacation-rental-websites-1550853606.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>


                {/* <SwiperSlide>
                    <div className="bg-gradient-to-tr from-[#000000CC] to-[#00000059]">
                        <div className='h-[calc(100vh-200px)]'>
                            <div className=' absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                                <h1 className='text-4xl font-bold  text-white'> Right Vacation Home</h1>
                                <p className='w-[90%] md:w-4/5 lg:w-3/4 text-white'>Unwind in your dream getaway. Our Vacation Homes beckon with comfort and charm, offering the perfect backdrop for unforgettable moments.</p>
                            </div>
                            <img src={'https://i.ibb.co/0FqdW1T/vacation-rental-websites-1550853606.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />
                        </div>
                    </div>
                </SwiperSlide> */}


            </Swiper>
        </div>
    );
};

export default Bannar;