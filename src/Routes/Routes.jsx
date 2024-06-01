import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Register from './../pages/Register/Register';
import Login from "../pages/Login/Login";
import AvailableCamps from './../pages/AvailableCamps/AvailableCamps';
import JoinUs from './../pages/JoinUs/JoinUs';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/available-camps",
          element: <AvailableCamps></AvailableCamps>,
        },
        {
          path: "/join-us",
          element: <JoinUs></JoinUs>,
        },
    ],
},
]);
    