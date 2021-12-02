import "./Navigations.css";
import { NavLink } from "react-router-dom";
export default function Navigations() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          HomePage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          MoviesPage
        </NavLink>
      </li>
    </ul>
  );
}
