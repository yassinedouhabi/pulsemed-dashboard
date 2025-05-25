'use client';

import { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'sonner';

const ROLES = ['Doctor', 'Nurse', 'Admin'];

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(ROLES[0]);
  const [email, setEmailInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setRole, setEmail } = useContext(AuthContext);

  const containerRef = useRef(null);
  const activeTabRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const activeTabElement = activeTabRef.current;

    if (container && activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      const clipLeft = offsetLeft;
      const clipRight = offsetLeft + offsetWidth;

      container.style.clipPath = `inset(0 ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% 0 ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}% round 17px)`;
    }
  }, [selectedRole]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedRole) {
      toast.error('Please select a role.');
      return;
    }
    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    toast.success(`You selected ${selectedRole}`);

    setRole(selectedRole);
    setEmail(email);
    navigate('/dashboard');
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <div className='role-select'>
        <div className=' block text-sm font-medium text-gray-700'>Please Select your roule</div>
        <div className='wrapper mt-1'>
          <ul className='list'>
            {ROLES.map((role) => (
              <li key={role}>
                <button type='button' onClick={() => setSelectedRole(role)} ref={selectedRole === role ? activeTabRef : null} className='button'>
                  {role}
                </button>
              </li>
            ))}
          </ul>

          <div aria-hidden className='clip-path-container list-overlay' ref={containerRef}>
            <ul className='list'>
              {ROLES.map((role) => (
                <li key={role}>
                  <button type='button' tabIndex={-1} onClick={() => setSelectedRole(role)} className='button button-overlay'>
                    {role}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
          Email Address
        </label>
        <input id='email' type='email' value={email} onChange={(e) => setEmailInput(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-blue-100 rounded-md focus:ring focus:ring-blue-200 bg-white' />
      </div>
      <div>
        <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
          Password
        </label>
        <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='mt-1 block w-full px-4 py-2 border border-blue-100 rounded-md focus:ring focus:ring-blue-200 bg-white' />
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
