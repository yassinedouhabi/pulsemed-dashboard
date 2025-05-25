import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { role, email } = useContext(AuthContext);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Welcome, {role}!</h1>
      <p className="text-gray-600">Logged in as: {email}</p>

      {role === "Doctor" && (
        <div className="bg-blue-50 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Doctor Dashboard</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>View Appointments</li>
            <li>Prescribe Medication</li>
            <li>Review Patient Files</li>
          </ul>
        </div>
      )}

      {role === "Nurse" && (
        <div className="bg-green-50 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Nurse Dashboard</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Check Patient Vitals</li>
            <li>Update Logs</li>
            <li>Assist in Procedures</li>
          </ul>
        </div>
      )}

      {role === "Admin" && (
        <div className="bg-yellow-50 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Manage Users</li>
            <li>System Configuration</li>
            <li>Audit Logs</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
