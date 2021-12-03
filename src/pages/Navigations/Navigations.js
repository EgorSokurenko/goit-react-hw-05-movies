import { NavLink } from "react-router-dom";
export default function Navigations() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
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
