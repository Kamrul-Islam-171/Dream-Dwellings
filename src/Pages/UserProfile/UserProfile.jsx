import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const UserProfile = () => {
    
    const { user } = useContext(AuthContext);
    console.log(user);

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="">
            <Helmet>
                <title>User Profile</title>
            </Helmet>





            <div className="flex items-center justify-center p-4 lg:py-10 md:py-8">
                <div data-aos='fade-left' data-aos-duration='1000' className=" rounded-xl shadow-2xl bg-base-200  space-y-3 flex lg:w-1/3 md:w-1/2 w-full  flex-col justify-center items-center  min-h-[calc(100vh-80px)]">
                    
                        <div className="border-4 flex items-center justify-center border-gray-800 p-2 w-[200px] h-[200px] rounded-full">
                            <img alt="not found" className=" rounded-full h-full" src={user?.photoURL} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-800">{user?.displayName}</h1>
                        <h1 className="text-gray-800 text-lg">{user?.email}</h1>
                        <Link onClick={scrollToTop} to={'/updateProfile'}><p className="btn hover:text-primary-color hover:bg-white  hover:border-primary-color bg-primary-color text-white font-bold text-lg border-none px-5 mb-5">Update Profile</p></Link>

                </div>
            </div>



        </div>
    );
};

export default UserProfile;