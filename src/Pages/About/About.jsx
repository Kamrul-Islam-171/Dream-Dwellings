import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import 'animate.css';


const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Helmet>
                <title>About Us</title>
            </Helmet>

            <div className="container mx-auto">
                <div className="">

                    <div className="grid lg:grid-cols-2 min-h-[calc(100vh-85px)] gap-5 items-center">
                        <h1 className="md:text-3xl text-xl lg:text-4xl text-center animate__animated animate__pulse">Welcome to <br /> <span className="lg:text-6xl md:text-5xl text-4xl font-bold">Dream <span className="text-primary-color">Dwellings</span></span></h1>
                        <p data-aos = "fade-left" data-aos-duration='1000' className="lg:text-2xl text-xl text-justify text-gray-600">At Dream Dwellings, we don't just sell houses; we craft dreams into reality. Our story began with a vision to redefine the real estate experience, offering not just properties, but spaces where aspirations thrive and memories are made. Whether you're looking to buy or rent, our diverse portfolio of properties, including single-family houses, apartments, student housing, seaside rental homes, and senior community living options, ensures that there's something for everyone.</p>
                    </div>

                </div>

                <div>
                    <h1 className="text-4xl font-medium text-center" data-aos="zoom-in" data-aos-duration="600">Our Story</h1>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8 lg:w-2/3 mx-auto mt-10">
                        <div className="bg-secondary-color text-gray-600 hover:bg-white hover:text-primary-color border border-secondary-color px-5 py-8 lg:px-16 lg:py-16 md:px-16 md:py-16" data-aos='zoom-in-right' data-aos-duration='1000' data-aos-delay="300">
                            <p className="text-justify">Founded with a passion for connecting individuals with their ideal living spaces, Dream Dwellings has been transforming houses into homes since 2016.</p>
                        </div>
                        <div className="bg-third-color text-gray-700 px-5 py-8 lg:px-16 lg:py-16 md:px-16 md:py-16 hover:bg-white hover:border-secondary-color hover:text-primary-color border border-third-color" data-aos='zoom-in-left' data-aos-duration='1000' data-aos-delay="300">
                            <p className="text-justify">Our journey began with a simple belief: that everyone deserves a place they can truly call their own. Over the years, we've built a reputation for excellence, integrity, and personalized service, earning the trust of countless clients along the way.</p>
                        </div>
                    </div>
                </div>


                <div className="mt-16 grid gap-8 lg:grid-cols-2 md:grid-cols-2">
                    <div className="hover:bg-primary-color hover:text-white border border-primary-color px-10 py-12 space-y-5" data-aos="fade-right" data-aos-duration='1000'>
                        <h1 className="text-4xl  text-center font-medium">Our Vision</h1>
                        <p className="text-justify ">Our vision is to be the cornerstone of your journey towards finding your perfect dwelling, whether it's a cozy single-family home, a luxurious apartment, a serene seaside retreat, or a vibrant student housing option. We aim to create a seamless and enjoyable process that leaves you with not just a house, but a home filled with memories and meaning.</p>
                    </div>

                    <div className="hover:bg-primary-color hover:text-white border border-primary-color px-10 py-12 space-y-5" data-aos="fade-left" data-aos-duration='1000'>
                        <h1 className="text-4xl text-center font-medium">Our Mission</h1>
                        <p className="text-justify ">Our mission is to make the process of buying or renting a home as seamless and enjoyable as possible. Whether you're a first-time buyer, a seasoned investor, or someone looking for the perfect rental, we're here to provide the guidance, support, and expertise you need to make the right decision for you and your family.</p>
                    </div>
                </div>

                <div className="mt-16 space-y-8">
                    <h1 className="text-4xl font-medium text-center"  data-aos="zoom-in" data-aos-duration = '1000'>What Sets Us Apart</h1>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 ">
                        <div className="bg-secondary-color border border-secondary-color hover:bg-white hover:text-primary-color hover:border hover:border-primary-color p-6 space-y-3 " data-aos="fade-up-left" data-aos-duration = '1000'
                        data-aos-delay='1000'>
                            <h3 className="text-xl font-medium">Diverse Portfolio</h3>
                            <p className="text-justify"> From spacious single-family houses to modern apartments, cozy student housing, serene seaside rentals, and vibrant senior community living, our diverse portfolio offers something for everyone.</p>
                        </div>
                        <div className=" hover:bg-white hover:text-primary-color hover:border hover:border-primary-color border border-third-color bg-third-color p-6 space-y-3 mt-4"
                        data-aos="fade-up-right" data-aos-duration = '1000' data-aos-delay='1000'>
                            <h3 className="text-xl font-medium">Personalized Approach</h3>
                            <p className="text-justify"> We understand that every individual and family is unique. That's why we take the time to listen to your needs, preferences, and goals, and tailor our services to ensure we find the perfect match for you.</p>
                        </div>
                        <div className=" hover:bg-white hover:text-primary-color hover:border hover:border-primary-color border border-secondary-color bg-secondary-color p-6 space-y-3 mt-8"
                        data-aos="fade-up-left" data-aos-duration = '1000'
                        data-aos-delay='1000'>
                            <h3 className="text-xl font-medium">Expertise</h3>
                            <p className="text-justify"> With years of experience in the real estate industry, our team of professionals brings a wealth of knowledge, insight, and expertise to every transaction.</p>
                        </div>
                        <div className=" hover:bg-white hover:text-primary-color hover:border hover:border-primary-color border border-third-color bg-third-color p-6 space-y-3 mt-12"
                        data-aos="fade-up-right" data-aos-duration = '1000'
                        data-aos-delay='1000'>
                            <h3 className="text-xl font-medium">Community Focus</h3>
                            <p className="text-justify"> Beyond just buying or renting properties, we're committed to building thriving communities where residents feel welcomed, supported, and connected.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row-reverse lg:flex-row-reverse mb-10 gap-8 h-[500px]">
                    <div className=" bg-red-300 h-[500px] lg:w-2/5 md:w-3/5 flex items-center justify-center bg-[url('https://i.ibb.co/T01wvfB/Commitment.jpg')] bg-center bg-cover bg-no-repeat" data-aos='fade-right' data-aos-duration = '1000' data-aos-delay='1200'>
                        <h1 className="text-5xl text-center text-white font-semibold">Our Commitments</h1>
                    </div>
                    <div className=" lg:w-3/5 md:w-4/5  flex items-center" data-aos='fade-left' data-aos-duration = '1000' data-aos-delay='1200'>
                        <p className="text-justify text-xl hover:text-primary-color ">At Dream Dwellings, we understand that finding the right home is a deeply personal and significant decision. That's why we go above and beyond to provide you with the support, guidance, and expertise you need to make the best choice for you and your loved ones. With a focus on integrity, transparency, and exceptional customer service, we strive to make the process of buying or renting a home as smooth and enjoyable as possible.</p>
                    </div>
                </div>
            </div>

        </>

    );
};

export default About;