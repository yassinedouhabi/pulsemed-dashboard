import { BrowserRouter, Routes, Route, Navigate, Outlet, NavLink, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route index element={<Navigate to='/dashboard' />} />

        <Route element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
        </Route>

        <Route
          path='dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
