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
import OrganizerRoute from "./OrganizerRoute";
import ParticipantRoute from "./ParticipantRoute";
import DashboardProfile from "../pages/Dashboard/DashboardProfile/DashboardProfile";
import OrganizerInfo from "../pages/Dashboard/DashboardProfile/OrganizerInfo";
import ParticipantInfo from "../pages/Dashboard/DashboardProfile/ParticipantInfo";

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
        {
          path: "/dashboard",
          element: <PrivateRoute><DashboardProfile></DashboardProfile></PrivateRoute>,
        },
        //organizer
        {
          path: "organizer-info",
          element: <PrivateRoute><OrganizerRoute><OrganizerInfo></OrganizerInfo></OrganizerRoute></PrivateRoute>,
        },
        {
          path: "organizer-profile",
          element: <PrivateRoute><OrganizerRoute><OrganizerProfile></OrganizerProfile></OrganizerRoute></PrivateRoute>,
        },
        {
          path: "add-camp",
          element: <PrivateRoute><OrganizerRoute><AddCamp></AddCamp></OrganizerRoute></PrivateRoute>,
        },
        {
          path: "manage-camp",
          element: <PrivateRoute><OrganizerRoute><ManageCamps></ManageCamps></OrganizerRoute></PrivateRoute>,
        },
        {
          path: "update/:id",
          element: <PrivateRoute><OrganizerRoute><UpdateCamps></UpdateCamps></OrganizerRoute></PrivateRoute>,
        },
        {
          path: "manage-registered-camp",
          element: <PrivateRoute><ManageRegCamps><ManageRegCamps></ManageRegCamps></ManageRegCamps></PrivateRoute>,
        },
        
        //participants
        {
          path: "participant-info",
          element: <PrivateRoute><ParticipantRoute><ParticipantInfo></ParticipantInfo></ParticipantRoute></PrivateRoute>,
        },
        {
          path: "participant-profile",
          element: <PrivateRoute><ParticipantRoute><ParticipantProfile></ParticipantProfile></ParticipantRoute></PrivateRoute>,
        },
        {
          path: "analytics",
          element: <PrivateRoute><ParticipantRoute><Analytics></Analytics></ParticipantRoute></PrivateRoute>,
        },
        {
          path: "registered-camp",
          element:<PrivateRoute><RegisteredCamps></RegisteredCamps></PrivateRoute>,
        },
        {
          path: "payment-history",
          element: <PrivateRoute><ParticipantRoute><PaymentHistory></PaymentHistory></ParticipantRoute></PrivateRoute>,
        },
        {
          path: "feedback/:id",
          element: <PrivateRoute><ParticipantRoute><Feedback></Feedback></ParticipantRoute></PrivateRoute>
        },
        {
          path: "payment/:id",
          element: <PrivateRoute><ParticipantRoute><Payment></Payment></ParticipantRoute></PrivateRoute>
        },
    ],
},
]);
    