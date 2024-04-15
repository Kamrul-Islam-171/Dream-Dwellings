import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className="">
            <Helmet>
                <title>User Profile</title>
            </Helmet>

            {/* bg-[url('https://i.ibb.co/0FqdW1T/vacation-rental-websites-1550853606.jpg')] */}

            <div className="flex justify-center items-center py-16 bg-[url('https://i.ibb.co/Kqx1FGW/beach-house.jpg')] bg-center bg-no-repeat w-full bg-cover">
                <div className="  relative lg:w-1/3 md:w-2/4 w-4/5">
                    <div className=" rounded-xl opacity-60 shadow-2xl bg-white space-y-3 flex w-full  flex-col justify-center items-center  min-h-[calc(100vh-80px)]">
                        {/* <div className="border-2 flex items-center justify-center border-primary-color p-2 w-[200px] h-[200px] rounded-full">
                            <img alt="not found" className="w-full h-full rounded-full object-cover" src={user?.photoURL} />
                        </div>
                        <h1 className="text-3xl">{user?.displayName}</h1>
                        <h1>{user?.email}</h1> */}
                       

                    </div>
                    <div className="absolute top-1/4 left-[15%] lg:left-[24%] md:left-[25%] flex flex-col items-center">
                        <div className="border-4 flex items-center justify-center border-gray-600 p-2 w-[200px] h-[200px] rounded-full">
                            <img alt="not found" className="w-full h-full rounded-full object-cover" src={user?.photoURL} />
                        </div>
                        <h1 className="text-4xl  font-bold">{user?.displayName}</h1>
                        <h1 className="text-gray-900 font-medium text-lg">{user?.email}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;