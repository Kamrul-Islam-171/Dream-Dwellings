import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const FeedBack = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container mx-auto mt-36 mb-20">
            <div>
                <h1 className="text-4xl text-center mb-16" data-aos="zoom-out" data-aos-duration='1000'>Clients Testimonials</h1>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    <div className="space-y-5 shadow-lg px-10 py-8" data-aos="zoom-in-left"
                    data-aos-duration='1000'
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-delay='1000'>
                        <div className="flex gap-8 items-center">
                            <div className="w-[90px] h-[90px] ">
                                <img className="w-full h-full rounded-full" src={'https://i.ibb.co/60KZFxw/sarah-m-london-ceo-centene.jpg'} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Sarah M.</h3>
                                <p className="text-gray-500">Happy buyer</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-500">I can't thank Dream Dwellings enough for helping me find my perfect home. Their attention to detail and commitment to finding exactly what I wanted made the whole process a breeze. I highly recommend their services to anyone in search of their dream home.</p>
                        </div>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>

                    </div>

                    <div className="space-y-5 shadow-lg px-10 py-8" data-aos="zoom-in"
                    data-aos-duration='1000'
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-delay='1000'>
                        <div className="flex gap-8 items-center" data-aos="zoom-in-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-delay='1000'>
                            <div className="w-[90px] h-[90px] ">
                                <img className="w-full h-full rounded-full" src={'https://i.ibb.co/jb2FTg1/headshot-portrait.jpg'} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Michael L.</h3>
                                <p className="text-gray-500">Happy buyer</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-500">From the initial consultation to the day I moved into my new home, Dream Dwellings was there every step of the way. Their team went above and beyond to ensure I found a place that not only met but exceeded my expectations. I couldn't be happier with my experience.</p>
                        </div>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>

                    </div>


                    <div className="space-y-5 shadow-lg px-10 py-8" data-aos="zoom-in-down"
                    data-aos-duration='1000'
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" data-aos-delay='1000'>
                        <div className="flex gap-8 items-center">
                            <div className="w-[90px] h-[90px] ">
                                <img className="w-full h-full rounded-full" src={'https://i.ibb.co/VBrdGsv/emily-read-0.jpg'} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Emily K.</h3>
                                <p className="text-gray-500">Happy buyer</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-500">Dream Dwellings made the daunting task of buying a home feel effortless. Their expertise and professionalism gave me confidence throughout the entire process. I'm grateful for their guidance and would recommend them to anyone looking to find their dream home.</p>
                        </div>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>

                    </div>


                    <div className="space-y-5 shadow-lg px-10 py-8" data-aos="zoom-in-down"
                    data-aos-duration='1000'
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" >
                        <div className="flex gap-8 items-center">
                            <div className="w-[90px] h-[90px] ">
                                <img className="w-full h-full rounded-full" src={'https://i.ibb.co/J7508QD/dr-jason-pomerantz-md-106-320x320-2x.jpg'} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium"> Jason H.</h3>
                                <p className="text-gray-500">Happy buyer</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-500">As a first-time homebuyer, I had a lot of questions and concerns. Dream Dwellings patiently answered all of them and helped me navigate the complexities of the real estate market. Thanks to their expertise, I am now happily settled into my new home. I couldn't have done it without them.</p>
                        </div>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>

                    </div>

                    <div className="space-y-5 shadow-lg px-10 py-8" data-aos="zoom-in-up"
                        data-aos-offset="300"
                        data-aos-duration='1000'
                        data-aos-easing="ease-in-sine" >
                        <div className="flex gap-8 items-center">
                            <div className="w-[90px] h-[90px] ">
                                <img className="w-full h-full rounded-full" src={'https://i.ibb.co/cc9pyn8/1524080699809-e-2147483647-v-beta-t-PTOhe-4c-HE5-H-w5caxnz7i-Kxafr-MS548-Pd-We-2pkr-DU.jpg'} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Jessica S.</h3>
                                <p className="text-gray-500">Happy buyer</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-500">I had a specific vision for my dream home, and Dream Dwellings made it a reality. They listened to my needs and preferences and worked tirelessly to find properties that aligned with my vision. Thanks to their dedication, I am now living in the home of my dreams.</p>
                        </div>

                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>

                    </div>





                </div>
            </div>
        </div>
    );
};

export default FeedBack;