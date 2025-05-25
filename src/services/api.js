const API_URL = 'http://localhost:8000';

export const fetchAppointments = async () => {
  const res = await fetch(`${API_URL}/appointments`);
  if (!res.ok) throw new Error('Failed to fetch appointments');
  return res.json();
};

export const fetchPatients = async () => {
  const res = await fetch(`${API_URL}/patients`);
  if (!res.ok) throw new Error('Failed to fetch patients');
  return res.json();
};

export const fetchLogs = async () => {
  const res = await fetch(`${API_URL}/logs`);
  if (!res.ok) throw new Error('Failed to fetch patient logs');
  return res.json();
};

export const fetchUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};
