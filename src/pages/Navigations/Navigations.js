import { NavLink } from "react-router-dom";
export default function Navigations() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                HomePage
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/movies"
                className={({ isActive }) => (isActive ? "active" : "nav-link")}
              >
                MoviesPage
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
