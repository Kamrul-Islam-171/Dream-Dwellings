import { Outlet } from "react-router-dom";
import NavBar from "../Layouts/NavBar/NavBar";
import Footer from "../Layouts/Footer/Footer";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-462px)] mt-[78px]">
                <Outlet></Outlet>
            </div>
            <div className="bg-black">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;