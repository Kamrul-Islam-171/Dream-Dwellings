import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthProvider";


const UserProfile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    
    return (
        <div className="">
             <Helmet>
                <title>User Profile</title>
            </Helmet>
            <div className="space-y-3 flex flex-col justify-center items-center  min-h-[calc(100vh-80px)]">
                <div className="border border-primary-color p-10 w-[200px] h-[200px] rounded-full">
                    <img alt="not found w-full h-full" src={user?.photoURL} />
                </div>
                <h1 className="text-3xl">{user?.displayName}</h1>
                <h1>{user?.email}</h1>
            </div>
        </div>
    );
};

export default UserProfile;