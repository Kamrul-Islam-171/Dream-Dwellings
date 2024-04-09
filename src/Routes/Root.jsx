import { Outlet } from "react-router-dom";
import NavBar from "../Layouts/NavBar/NavBar";
import Footer from "../Layouts/Footer/Footer";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <div className="bg-black">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;