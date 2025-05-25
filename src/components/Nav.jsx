import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { HiMenuAlt3 } from "react-icons/hi";

function Nav() {
  const { role, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-[2%] border-2 border-blue-200  m-4 rounded-full flex flex-row items-center justify-between p-4 backdrop-filter backdrop-blur-lg bg-white/40">
      <div className="nav-logo">
        <h1 className="text-3xl font-bold cursor-pointer">
          <Link to="/">Pulsemed</Link>
        </h1>
      </div>

      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="nav-menu cursor-pointer"
      >
        <HiMenuAlt3 size={30} />
      </button>

      {isMenuOpen && (
        <div className="menu absolute top-full left-0 rounded-3xl mt-4 p-4 min-w-full border-2 border-blue-100 shadow-lg bg-white">
          <div className="nav-links flex flex-row items-center gap-4">
            {!role && <NavLink to="/login">Login</NavLink>}

            {role && (
              <div className="flex flex-col gap-4">
                <span className="font-medium">Role: {role}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
