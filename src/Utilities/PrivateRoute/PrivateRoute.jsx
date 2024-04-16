import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import PropTypes from 'prop-types'; // ES6


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    console.log(user)
    if(user) return children;

    if(loading) {
        return <div className="flex justify-center items-center h-screen"><SyncLoader color="#36d7b7" /></div>
    }



    return (
        <Navigate to={'/login'} state={location.pathname}></Navigate>
    );
};

PrivateRoute.propTypes = {
    children:PropTypes.node
}

export default PrivateRoute;