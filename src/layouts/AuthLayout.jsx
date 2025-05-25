import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='min-h-dvh flex items-center justify-center p-6'>
      <div className='w-full max-w-md bg-blue-50 rounded-2xl p-8'>
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
