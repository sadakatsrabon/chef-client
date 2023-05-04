import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/Contact/ContactUs";
import Error from "../pages/Error/Error";
import Cart from "../pages/Home/Cart/Cart";
import ChefRecipe from "../pages/Chef_recipies/ChefRecipe";
import Details from "../pages/Details/Details";

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
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'chef_recipes',
                element: <ChefRecipe></ChefRecipe>
            },
            {
                path: 'details',
                element: <Details></Details>
            }
        ]
    }
])

export default router;