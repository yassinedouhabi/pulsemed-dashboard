import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import PatientLogs from "./pages/PatientLogs";
import Schedule from "./pages/Schedule";
import UserManagement from "./pages/UserManagement";
import SystemSettings from "./pages/SystemSettings";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route index element={<Home />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        {/* protected dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            {/* other nested routes */}
          </Route>
        </Route>

        {/* Doctor Routes */}
        <Route path="dashboard/appointments" element={<Appointments />} />
        <Route path="dashboard/patients" element={<Patients />} />

        {/* Nurse Routes */}
        <Route path="dashboard/dashboard/logs" element={<PatientLogs />} />
        <Route path="dashboard/schedule" element={<Schedule />} />

        {/* Admin Routes */}
        <Route path="dashboard/users" element={<UserManagement />} />
        <Route path="dashboard/settings" element={<SystemSettings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
