import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Oder from "../Pages/OderFood/Oder/Oder";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
         path: "/oder/:category",
         element: <Oder></Oder>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/singup",
          element: <SingUp></SingUp>
        }
    ]
  },
]);
