import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  FaCalendarAlt,
  FaUserInjured,
  FaNotesMedical,
  FaRegCalendarCheck,
  FaUsersCog,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import Avvvatars from "avvvatars-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const { role, email, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.info("You have logged out.");

    // Delay navigation so toast shows
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <Avvvatars value={email || "user@example.com"} size={48} />
          <div>
            <h2 className="text-2xl font-bold text-blue-600">Pulsemed</h2>
            <p className="text-sm text-gray-600 truncate max-w-[150px]">
              {email}
            </p>
          </div>
        </div>

        <nav className="flex flex-col space-y-2">
          {role === "Doctor" && (
            <>
              <NavLink
                to="/dashboard/appointments"
                className="flex items-center gap-2"
              >
                <FaCalendarAlt /> Appointments
              </NavLink>
              <NavLink
                to="/dashboard/patients"
                className="flex items-center gap-2"
              >
                <FaUserInjured /> My Patients
              </NavLink>
            </>
          )}
          {role === "Nurse" && (
            <>
              <NavLink to="/dashboard/logs" className="flex items-center gap-2">
                <FaNotesMedical />
                Patient Logs
              </NavLink>
              <NavLink
                to="/dashboard/schedule"
                className="flex items-center gap-2"
              >
                <FaRegCalendarCheck />
                Schedule
              </NavLink>
            </>
          )}
          {role === "Admin" && (
            <>
              <NavLink
                to="/dashboard/users"
                className="flex items-center gap-2"
              >
                <FaUsersCog />
                User Management
              </NavLink>
              <NavLink
                to="/dashboard/settings"
                className="flex items-center gap-2"
              >
                <FaCog />
                System Settings
              </NavLink>
            </>
          )}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-800"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
