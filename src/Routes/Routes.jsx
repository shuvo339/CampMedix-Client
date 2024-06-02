import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Root from "../layouts/Root";
import Register from './../pages/Register/Register';
import Login from "../pages/Login/Login";
import AvailableCamps from './../pages/AvailableCamps/AvailableCamps';
import JoinUs from './../pages/JoinUs/JoinUs';
import DashboardLayout from './../layouts/DashboardLayout';
import AddCamp from '../pages/Dashboard/Organizer/AddCamp/AddCamp';
import CampDetails from './../pages/CampDetails/CampDetails';

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
        {
          path: "/details/:id",
          element: <CampDetails></CampDetails>,
        },
    ],
},
    {
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: "organizer-profile",
          element: <AddCamp></AddCamp>,
        },
        {
          path: "add-camp",
          element: <AddCamp></AddCamp>,
        },
   
    ],
},
]);
    