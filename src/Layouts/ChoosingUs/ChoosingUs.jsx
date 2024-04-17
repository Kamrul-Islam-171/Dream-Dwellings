import { FaPeopleRoof } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ChoosingUs = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container mx-auto">
            <h1 data-aos='zoom-in-left' data-aos-duration='1000' className="text-center text-3xl font-bold mb-14 mt-20">Why Choose Us</h1>
            <div className="flex flex-wrap justify-center gap-6">
                <div data-aos='fade-down' data-aos-duration='1000' data-aos-delay='300' className="lg:w-[32%] md:w-[48%] text-center flex flex-col items-center space-y-2">
                    <span className="text-7xl text-primary-color"><FaPeopleRoof /></span>
                    <h3 className="font-medium">PROPERTY MANAGEMENT</h3>
                    <p className="w-[80%] text-gray-500">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300' className="lg:w-[32%] md:w-[48%] text-center flex flex-col items-center space-y-2">
                    <span className="text-7xl text-primary-color"><FaHandHoldingUsd /></span>
                    <h3 className="font-medium">MORTGAGE SERVICES</h3>
                    <p className="w-[80%] text-gray-500">With a robust selection of popular properties on hand, as well as leading properties from real estate experts.</p>
                </div>
                <div data-aos='fade-down' data-aos-duration='1000' data-aos-delay='300' className="lg:w-[32%] md:w-[48%] text-center flex flex-col items-center space-y-2">
                    <span className="text-7xl text-primary-color"><FaSackDollar /></span>
                    <h3 className="font-medium">CURRENCY SERVICES</h3>
                    <p className="w-[80%] text-gray-500">Our stress-free finance department that can find financial solutions to save you money. </p>
                </div>
            </div>
        </div>
    );
};

export default ChoosingUs;