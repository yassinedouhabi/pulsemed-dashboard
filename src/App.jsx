import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLayout from './layouts/NavLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';
import ProtectedRoute from './routes/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Patients from './pages/Patients';
import PatientLogs from './pages/PatientLogs';
import Schedule from './pages/Schedule';
import UserManagement from './pages/UserManagement';
import SystemSettings from './pages/SystemSettings';

import { ToastContainer } from 'react-toastify';
import { Toaster } from 'sonner';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right' richColors closeButton />
      <Routes>
        {/* Public Pages (with NavLayout) */}
        <Route element={<NavLayout />}>
          <Route index element={<Home />} />

          <Route element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>

        {/* Protected Dashboard Routes (no NavLayout) */}
        <Route element={<ProtectedRoute />}>
          <Route path='dashboard' element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='appointments' element={<Appointments />} />
            <Route path='patients' element={<Patients />} />
            <Route path='logs' element={<PatientLogs />} />
            <Route path='schedule' element={<Schedule />} />
            <Route path='users' element={<UserManagement />} />
            <Route path='settings' element={<SystemSettings />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer position='top-right' autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
