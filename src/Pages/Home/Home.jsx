import { Helmet } from "react-helmet-async";
import Bannar from "../../Layouts/Bannar/Bannar";
import Properties from "../../Layouts/Properties/Properties";
import { useLoaderData } from "react-router-dom";
import ChoosingUs from "../../Layouts/ChoosingUs/ChoosingUs";



const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (

        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="mt-[70px]">
                <Bannar></Bannar>
            </div>

            <div className="bg-base-200">
                <div className="container mx-auto pt-24 pb-24">
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