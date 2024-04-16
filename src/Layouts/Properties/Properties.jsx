import { useLoaderData } from "react-router-dom";
import HouseCard from "./HouseCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Properties = ({ data }) => {
    // const data = useLoaderData();
    console.log(data)
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className="flex flex-col justify-center items-center space-y-3">
                <h1 data-aos='fade-right' data-aos-duration='1000' className="text-center text-3xl font-bold">Latest Properties</h1>
                <p data-aos='fade-left' data-aos-duration='1000' className="text-center w-1/2">Discover your dream home with the latest listings showcasing a variety of styles, locations, and price ranges, tailored to fit your unique preferences and needs.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 ">
                {
                    data.map(item => <HouseCard key={item.id} houseInfo={item}></HouseCard>)
                }
            </div>
        </div>
    );
};

export default Properties;