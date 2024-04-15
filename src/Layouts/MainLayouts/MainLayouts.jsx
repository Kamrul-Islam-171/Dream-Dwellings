import { createBrowserRouter } from "react-router-dom";
import Root from "../../Routes/Root";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/LogIn/Login";
import PropertyDetails from "../../Pages/PropertyDetails/PropertyDetails";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import Register from "../../Pages/Register/Register";
import FeedBack from "../../Pages/FeedBack/FeedBack";
import UpdateProfile from "../../Pages/UpdateProfile/UpdateProfile";
import Blogs from "../../Pages/Blogs/Blogs";
import PrivateRoute from "../../Utilities/PrivateRoute/PrivateRoute";

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
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/propertyDetails/:id',
                element : <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader:() => fetch('/properties.json')
            },
            {
                path:'/userProfile',
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path:'/feedbacks',
                element:<PrivateRoute><FeedBack></FeedBack></PrivateRoute>
            },
            {
                path:'/updateProfile',
                element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path:'/blogs/:id',
                element:<PrivateRoute><Blogs></Blogs></PrivateRoute>,
                loader: () => fetch('/blogs.json')
            }
        ]
    },
]);

export default router;