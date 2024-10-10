import { NavLink } from "react-router-dom";
import "../Styling/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/">
              <img className="logo_img" src={logo} alt="image" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/galerie"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Galerie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/suspensii"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Suspensii
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/proiectoare"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Proiectoare si bare LED
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jante"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Jante
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bare"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Bare de protectie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anvelope"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Anvelope
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
