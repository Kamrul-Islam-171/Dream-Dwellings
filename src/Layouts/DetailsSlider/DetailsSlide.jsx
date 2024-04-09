import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay, } from 'swiper/modules';

const DetailsSlide = ({ image1, image2, image3 }) => {
    return (
        <div className=" container mx-auto ">
            <Swiper pagination={true}  loop = {true} modules={[ Autoplay, Pagination]} className="mySwiper" autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}>
                <SwiperSlide>
                    <div className='h-[calc(100vh-78px)]'>
                        <img src={image1} className='h-full w-full object-cover' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-78px)]'>
                        <img src={image2} className='h-full w-full object-cover' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-78px)] '>
                        <img src={image3} className='h-full w-full object-cover' alt="" />
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default DetailsSlide;