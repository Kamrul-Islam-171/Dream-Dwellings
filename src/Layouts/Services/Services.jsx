import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { LiaHandshakeSolid } from "react-icons/lia";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Services = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="bg-white p-8  space-y-4 rounded-md" data-aos='fade-up' data-aos-duration='1000'>
                <span className="text-5xl text-primary-color"><IoHomeOutline /></span>
                <h3 className="text-lg font-medium ">Buy your home</h3>
                <p className="text-gray-500">Unlock the door to your dream home with just a click! Browse and buy your ideal property directly from our website today.</p>
            </div>
            <div data-aos='fade-down' data-aos-duration='1000' className="bg-white p-8 space-y-4 rounded-md">
                <span className="text-5xl text-primary-color"><MdOutlineLocalOffer /></span>
                <h3 className="text-lg font-medium">Get the best offers</h3>
                <p className="text-gray-500">Experience unparalleled offers crafted exclusively for you! Delve into our website's exquisite selection and claim the extraordinary deals that await.</p>
            </div>
            <div data-aos='fade-up' data-aos-duration='1000' className="bg-white p-8 space-y-4 rounded-md">
                <span className="text-5xl text-primary-color"><LiaHandshakeSolid  /></span>
                <h3 className="text-lg font-medium">Close the deal fast</h3>
                <p className="text-gray-500">Accelerate your journey to ownership! With streamlined processes, our website ensures swift closings, turning your dreams into reality in no time.</p>
            </div>
        </div>
    );
};

export default Services;