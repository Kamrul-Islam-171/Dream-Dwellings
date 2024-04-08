import { createBrowserRouter } from "react-router-dom";
import Root from "../../Routes/Root";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/LogIn/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
]);

export default router;