import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



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
                        <h1 className="md:text-3xl text-xl lg:text-4xl text-center">Welcome to <br /> <span className="lg:text-6xl md:text-5xl text-4xl font-bold">Dream <span className="text-primary-color">Dwellings</span></span></h1>
                        <p className="lg:text-2xl text-xl text-justify text-gray-600">At Dream Dwellings, we don't just sell houses; we craft dreams into reality. Our story began with a vision to redefine the real estate experience, offering not just properties, but spaces where aspirations thrive and memories are made. Whether you're looking to buy or rent, our diverse portfolio of properties, including single-family houses, apartments, student housing, seaside rental homes, and senior community living options, ensures that there's something for everyone.</p>
                    </div>

                </div>

                <div>
                    <h1 className="text-4xl text-center" data-aos="zoom-in" data-aos-duration="600">Our Story</h1>
                    <div className="grid grid-cols-2 gap-8 w-2/3 mx-auto mt-10">
                        <div className="bg-secondary-color text-gray-700 px-16 py-16" data-aos='zoom-in-right' data-aos-delay = "300">
                            <p className="text-justify">Founded with a passion for connecting individuals with their ideal living spaces, Dream Dwellings has been transforming houses into homes since 2016.</p>
                        </div>
                        <div className="bg-third-color text-gray-700 px-16 py-16" data-aos='zoom-in-left' data-aos-delay = "300">
                            <p className="text-justify">Our journey began with a simple belief: that everyone deserves a place they can truly call their own. Over the years, we've built a reputation for excellence, integrity, and personalized service, earning the trust of countless clients along the way.</p>
                        </div>
                    </div>
                </div>


                <div className="mt-16 grid gap-8 grid-cols-2">
                    <div className="border border-primary-color px-10 py-12 space-y-5" data-aos="fade-right" data-aos-duration='600'>
                        <h1 className="text-4xl  text-center">Our Vision</h1>
                        <p className="text-justify">Our vision is to be the cornerstone of your journey towards finding your perfect dwelling, whether it's a cozy single-family home, a luxurious apartment, a serene seaside retreat, or a vibrant student housing option. We aim to create a seamless and enjoyable process that leaves you with not just a house, but a home filled with memories and meaning.</p>
                    </div>

                    <div className="border border-primary-color px-10 py-12 space-y-5" data-aos="fade-left" data-aos-duration='600'>
                        <h1 className="text-4xl text-center">Our Mission</h1>
                        <p className="text-justify">Our mission is to make the process of buying or renting a home as seamless and enjoyable as possible. Whether you're a first-time buyer, a seasoned investor, or someone looking for the perfect rental, we're here to provide the guidance, support, and expertise you need to make the right decision for you and your family.</p>
                    </div>
                </div>

                <div className="mt-16">
                    <h1 className="text-4xl text-center">What Sets Us Apart</h1>
                    <div>
                        <div>
                            <h3 className="text-xl font-medium">Diverse Portfolio</h3>
                            <p> From spacious single-family houses to modern apartments, cozy student housing, serene seaside rentals, and vibrant senior community living, our diverse portfolio offers something for everyone.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium">Personalized Approach</h3>
                            <p> We understand that every individual and family is unique. That's why we take the time to listen to your needs, preferences, and goals, and tailor our services to ensure we find the perfect match for you.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium">Expertise</h3>
                            <p> With years of experience in the real estate industry, our team of professionals brings a wealth of knowledge, insight, and expertise to every transaction.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium">Community Focus</h3>
                            <p> Beyond just buying or renting properties, we're committed to building thriving communities where residents feel welcomed, supported, and connected.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h1 className="text-4xl text-center">Our Commitment</h1>
                    <p>At Dream Dwellings, we understand that finding the right home is a deeply personal and significant decision. That's why we go above and beyond to provide you with the support, guidance, and expertise you need to make the best choice for you and your loved ones. With a focus on integrity, transparency, and exceptional customer service, we strive to make the process of buying or renting a home as smooth and enjoyable as possible.</p>
                </div>
            </div>

        </>

    );
};

export default About;