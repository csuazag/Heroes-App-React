import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 mb-5">
      <Link className="navbar-brand" to="/">
        Heroes App
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto align-items-center">
          <span className="nav-item nav-link text-primary">Camilo</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
