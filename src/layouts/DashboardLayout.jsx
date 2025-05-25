import { useContext, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaCalendarAlt, FaUserInjured, FaNotesMedical, FaRegCalendarCheck, FaUsersCog, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Avvvatars from 'avvvatars-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const { role, email, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.info('You have logged out.');

    // Delay navigation so toast shows
    setTimeout(() => {
      navigate('/login');
    }, 500);
  };

  // Handle Expantion
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpantion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className='flex min-h-dvh bg-slate-100'>
      {/* Sidebar */}

      <aside className={`relative flex flex-col bg-white shadow-lg p-6 space-y-4 ${isExpanded ? 'max-w-1/2 items-start' : 'w-fit items-center'}`}>
        <button className='hidden bg-blue-500 w-10 h-10 rounded-full text-white text-xl font-bold md:flex items-center justify-center absolute top-7 -right-5 cursor-pointer' onClick={handleExpantion}>
          {isExpanded ? <MdOutlineKeyboardArrowLeft size={30} /> : <MdOutlineKeyboardArrowRight size={30} />}
        </button>

        <div className='flex items-center gap-4 mb-6'>
          <Avvvatars value={email || 'user@example.com'} size={48} />
          <div className={`${isExpanded ? 'block' : 'hidden'} `}>
            <h2 className='text-2xl font-bold text-blue-600'>{role}</h2>
            <p className='text-sm text-gray-400 truncate max-w-[150px]'>{email}</p>
          </div>
        </div>

        <nav className='flex flex-col space-y-4 text-slate-700'>
          {role === 'Doctor' && (
            <>
              <NavLink to='/dashboard/appointments' className='flex items-center gap-2'>
                <FaCalendarAlt size={30} /> {isExpanded && 'Appointments'}
              </NavLink>
              <NavLink to='/dashboard/patients' className='flex items-center gap-2'>
                <FaUserInjured size={30} /> {isExpanded && 'My Patients'}
              </NavLink>
            </>
          )}

          {role === 'Nurse' && (
            <>
              <NavLink to='/dashboard/logs' className='flex items-center gap-2'>
                <FaNotesMedical size={30} /> {isExpanded && 'Patient Logs'}
              </NavLink>
              <NavLink to='/dashboard/schedule' className='flex items-center gap-2'>
                <FaRegCalendarCheck size={30} /> {isExpanded && 'Schedule'}
              </NavLink>
            </>
          )}
          {role === 'Admin' && (
            <>
              <NavLink to='/dashboard/users' className='flex items-center gap-2'>
                <FaUsersCog />
                User Management
              </NavLink>
              <NavLink to='/dashboard/settings' className='flex items-center gap-2'>
                <FaCog />
                System Settings
              </NavLink>
            </>
          )}

          <button onClick={handleLogout} className='flex items-center gap-2 text-red-600 hover:text-red-800'>
            <FaSignOutAlt size={30} /> {isExpanded ? 'Logout' : ''}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-6'>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
