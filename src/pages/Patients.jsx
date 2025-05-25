import React, { useEffect, useState } from "react";
import { fetchPatients } from "../services/api";
import Spinner from "../components/Spinner";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      fetchPatients()
        .then((data) => setPatients(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, 1500); // 1500ms delay

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);

  if (loading) return <Spinner />;
  if (error)
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-md border border-red-400">
        <strong>Error:</strong> {error}
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Patients</h1>
      <ul>
        {patients.map(({ id, name, age }) => (
          <li key={id} className="mb-2 border-b py-2">
            <strong>{name}</strong> — Age: {age}
          </li>
        ))}
      </ul>
    </div>
  );
}
