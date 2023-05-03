import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/Contact/ContactUs";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'contact',
                element: <ContactUs></ContactUs>
            }
        ]
    }
])

export default router;