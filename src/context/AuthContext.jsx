// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem('userRole') || null);
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || null);

  useEffect(() => {
    if (role) {
      localStorage.setItem('userRole', role);
    } else {
      localStorage.removeItem('userRole');
    }
  }, [role]);

  useEffect(() => {
    if (email) {
      localStorage.setItem('userEmail', email);
    } else {
      localStorage.removeItem('userEmail');
    }
  }, [email]);

  const logout = () => {
    setRole(null);
    setEmail(null);
  };

  return <AuthContext.Provider value={{ role, setRole, email, setEmail, logout }}>{children}</AuthContext.Provider>;
};
