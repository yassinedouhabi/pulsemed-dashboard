import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-6'>
      <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>
        <div className='text-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>Login or Register</h1>
          <p className='text-sm text-gray-500'>Please enter your information to continue</p>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
