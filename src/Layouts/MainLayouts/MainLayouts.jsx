import { createBrowserRouter } from "react-router-dom";
import Root from "../../Routes/Root";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/LogIn/Login";
import PropertyDetails from "../../Pages/PropertyDetails/PropertyDetails";
import UserProfile from "../../Pages/UserProfile/UserProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:() => fetch('/properties.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/propertyDetails/:id',
                element : <PropertyDetails></PropertyDetails>,
                loader:() => fetch('/properties.json')
            },
            {
                path:'/userProfile',
                element:<UserProfile></UserProfile>
            }
        ]
    },
]);

export default router;