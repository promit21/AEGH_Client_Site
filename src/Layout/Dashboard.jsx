import { VscThreeBars } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="m-2 fixed text-xl drawer-button"
          >
            <VscThreeBars />
          </label>
          <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="adminDashboard">Admin</NavLink>
                </li>
                <li>
                  <NavLink to="allUsers">All Users</NavLink>
                </li>
                <li>
                  <NavLink to="allAppointment">All Appointment</NavLink>
                </li>
                <li>
                  <NavLink to="addDoctor">Add a Doctor</NavLink>
                </li>
                <li>
                  <NavLink to="manageDoctor">Manage a Doctor</NavLink>
                </li>
              </>
            ) : (
              // User Dashboard
              <>
                <li>
                  <NavLink to="myAppointment">My Appointment</NavLink>
                </li>
                <li>
                  <NavLink to="myHistory">My History</NavLink>
                </li>
                <li>
                  <NavLink to="myReviews">My Reviews</NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
