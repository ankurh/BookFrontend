import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../component/Login";
import Register from "../component/Register";
import Cart from "../pages/home/Cart";
import CheckOut from "../pages/home/CheckOut";

 

 const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },

            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/checkout",
                element:<CheckOut/>
            },


        ]
    }

 ])

 export default router;