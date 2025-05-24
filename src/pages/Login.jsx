import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [email, setEmailInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setRole, setEmail } = useContext(AuthContext);

  const handleRoleClick = (role, e) => {
    e.preventDefault();
    setSelectedRole(role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedRole) {
      alert('Please select a role.');
      return;
    }
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Set role and email in context (and localStorage via useEffect in context)
    setRole(selectedRole);
    setEmail(email);

    navigate('/dashboard');
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <div className='role flex flex-col gap-4'>
        <h1>Please select your role:</h1>
        <div className='role-selector flex flex-row items-center justify-between bg-blue-50 rounded-lg'>
          {['Doctor', 'Nurse', 'Admin'].map((role) => (
            <button key={role} onClick={(e) => handleRoleClick(role, e)} className={`px-4 py-2 m-2 rounded font-medium cursor-pointer ${selectedRole === role ? 'bg-blue-600 text-white' : 'text-blue-900 hover:bg-blue-100'}`} type='button'>
              {role}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
          Email Address
        </label>
        <input id='email' type='email' required value={email} onChange={(e) => setEmailInput(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200' />
      </div>

      <div>
        <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
          Password
        </label>
        <input id='password' type='password' required value={password} onChange={(e) => setPassword(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200' />
      </div>

      <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition'>
        Log In
      </button>

      <p className='text-center text-sm text-gray-600'>
        Don't have an account? <span className='text-blue-600 hover:underline cursor-pointer'>Create one</span>
      </p>
    </form>
  );
};

export default Login;
