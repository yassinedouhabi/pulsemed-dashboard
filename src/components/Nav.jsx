import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Nav() {
  const { role, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className='flex flex-col md:flex-row items-center justify-between gap-4 p-4'>
      <div className='nav-logo'>
        <h1 className='text-3xl font-bold cursor-pointer'>
          <Link to='/'>Pulsemed</Link>
        </h1>
      </div>

      <div className='nav-links flex flex-row items-center gap-4'>
        {!role && <NavLink to='/login'>Login</NavLink>}

        {role && (
          <>
            <span className='font-medium'>Role: {role}</span>
            <button onClick={handleLogout} className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition'>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
