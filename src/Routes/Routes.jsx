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
import ManageCamps from './../pages/Dashboard/Organizer/ManageCamps/ManageCamps';
import ManageRegCamps from './../pages/Dashboard/Organizer/ManageRegCamps/ManageRegCamps';
import ParticipantProfile from './../pages/Dashboard/Participant/Participant Profile/ParticipantProfile';
import Analytics from './../pages/Dashboard/Participant/Analytics/Analytics';
import PaymentHistory from './../pages/Dashboard/Participant/PaymentHistory/PaymentHistory';
import OrganizerProfile from './../pages/Dashboard/Organizer/OrganizerProfile/OrganizerProfile';
import RegisteredCamps from "../pages/Dashboard/Participant/RegisteredCamps/RegisteredCamps";
import Feedback from './../pages/Dashboard/Participant/Feedback/Feedback';
import Payment from "../pages/Dashboard/Participant/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import UpdateCamps from "../pages/Dashboard/Organizer/ManageCamps/UpdateCamps";

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
          element: <PrivateRoute><CampDetails></CampDetails></PrivateRoute>,
        },
    ],
},
    {
      path: "/dashboard",
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        //organizer
        {
          path: "organizer-profile",
          element: <PrivateRoute><OrganizerProfile></OrganizerProfile></PrivateRoute>,
        },
        {
          path: "add-camp",
          element: <PrivateRoute><AddCamp></AddCamp></PrivateRoute>,
        },
        {
          path: "manage-camp",
          element: <PrivateRoute><ManageCamps></ManageCamps></PrivateRoute>,
        },
        {
          path: "update/:id",
          element: <PrivateRoute><UpdateCamps></UpdateCamps></PrivateRoute>,
        },
        {
          path: "manage-registered-camp",
          element: <PrivateRoute><ManageRegCamps></ManageRegCamps></PrivateRoute>,
        },
        //participants
        {
          path: "participant-profile",
          element: <PrivateRoute><ParticipantProfile></ParticipantProfile></PrivateRoute>,
        },
        {
          path: "analytics",
          element: <PrivateRoute><Analytics></Analytics></PrivateRoute>,
        },
        {
          path: "registered-camp",
          element:<PrivateRoute><RegisteredCamps></RegisteredCamps></PrivateRoute>,
        },
        {
          path: "payment-history",
          element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>,
        },
        {
          path: "feedback/:id",
          element: <PrivateRoute><Feedback></Feedback></PrivateRoute>,
        },
        {
          path: "payment/:id",
          element: <PrivateRoute><Payment></Payment></PrivateRoute>
        },
    ],
},
]);
    