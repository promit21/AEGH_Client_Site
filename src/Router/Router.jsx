import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Dashboard from "../Layout/Dashboard";
import AllUser from "../Pages/Dashboard/Admin/AllUser";
import AddDoctor from "../Pages/Dashboard/Admin/AddDoctor";
import ManageDoctor from "../Pages/Dashboard/Admin/ManageDoctor";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard";
import DoctorProfile from "../Pages/Home/ExpartDoctor/DoctorProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import PrivateRouter from "./PrivateRouter";
import MyAppointment from "../Pages/Dashboard/Users/MyAppointment";
import MyHistory from "../Pages/Dashboard/Users/MyHistory";
import MyReviews from "../Pages/Dashboard/Users/MyReviews";
import UserProfile from "../Pages/UserProfile/UserProfile";
import AdminRouter from "./AdminRouter";
import AllAppointment from "../Pages/Dashboard/Admin/AllAppointment";
import UpdateDoctor from "../Pages/Dashboard/Admin/UpdateDoctor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/appointment",
        element: (
          <PrivateRouter>
            <Appointment />
          </PrivateRouter>
        ),
      },
      {
        path: "/doctorProfile/:id",
        element: <DoctorProfile />,
        loader: ({ params }) =>
          fetch(`https://aegh-server.vercel.app/doctors/${params.id}`),
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRouter>
            <UserProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      // Admin Dashboard Routes
      {
        path: "adminDashboard",
        element: (
          <AdminRouter>
            <AdminDashboard></AdminDashboard>
          </AdminRouter>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRouter>
            <AllUser></AllUser>
          </AdminRouter>
        ),
      },
      {
        path: "allAppointment",
        element: <AllAppointment />,
      },
      {
        path: "addDoctor",
        element: (
          <AdminRouter>
            <AddDoctor></AddDoctor>
          </AdminRouter>
        ),
      },
      {
        path: "manageDoctor",
        element: (
          <AdminRouter>
            <ManageDoctor></ManageDoctor>
          </AdminRouter>
        ),
      },
      {
        path: "updateDoctor/:id",
        element: <UpdateDoctor />,
        loader: ({ params }) =>
          fetch(`https://aegh-server.vercel.app/doctors/${params.id}`),
      },
      // User Dashboard Routes
      {
        path: "myAppointment",
        element: (
          <PrivateRouter>
            <MyAppointment />
          </PrivateRouter>
        ),
      },
      {
        path: "myHistory",
        element: (
          <PrivateRouter>
            <MyHistory />
          </PrivateRouter>
        ),
      },
      {
        path: "myReviews",
        element: (
          <PrivateRouter>
            <MyReviews />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
