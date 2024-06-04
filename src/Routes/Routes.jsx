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
        //organizer
        {
          path: "organizer-profile",
          element: <OrganizerProfile></OrganizerProfile>,
        },
        {
          path: "add-camp",
          element: <AddCamp></AddCamp>,
        },
        {
          path: "manage-camp",
          element: <ManageCamps></ManageCamps>,
        },
        {
          path: "manage-registered-camp",
          element: <ManageRegCamps></ManageRegCamps>,
        },
        //participants
        {
          path: "participant-profile",
          element: <ParticipantProfile></ParticipantProfile>,
        },
        {
          path: "analytics",
          element: <Analytics></Analytics>,
        },
        {
          path: "registered-camp",
          element:<RegisteredCamps></RegisteredCamps>,
        },
        {
          path: "payment-history",
          element: <PaymentHistory></PaymentHistory>,
        },
        {
          path: "feedback/:id",
          element: <Feedback></Feedback>,
        },
        {
          path: "payment/:id",
          element: <Payment></Payment>
        },
    ],
},
]);
    