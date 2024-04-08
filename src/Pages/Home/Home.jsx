import { Helmet } from "react-helmet-async";
import Bannar from "../../Layouts/Bannar/Bannar";



const Home = () => {
    return (

        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="mt-[70px]">
                <Bannar></Bannar>
            </div>
        </>
    );
};

export default Home;