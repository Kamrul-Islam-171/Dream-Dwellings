import { Helmet } from "react-helmet-async";
import Bannar from "../../Layouts/Bannar/Bannar";
import Properties from "../../Layouts/Properties/Properties";
import { useLoaderData } from "react-router-dom";
import ChoosingUs from "../../Layouts/ChoosingUs/ChoosingUs";
import Services from "../../Layouts/Services/Services";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Home = () => {
    const data = useLoaderData();
    useEffect(() => {
        AOS.init();
    }, [])
    // console.log(data)
    return (

        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="mt-24 container mx-auto ">
                <Bannar></Bannar>
            </div>




            <div className="bg-base-200">
                <div className="container mx-auto pt-24 pb-24">
                    <div className=" mb-24 mt-10" >

                        <Services></Services>
                    </div>
                    <Properties data={data}></Properties>
                </div>
            </div>

            <div className="mb-20">
                <ChoosingUs></ChoosingUs>
            </div>
        </>
    );
};

export default Home;