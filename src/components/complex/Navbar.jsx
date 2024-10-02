import { Link } from "react-router-dom";
import "../Styling/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img className="search_icon" src="../search-b.png" alt="image" />
      </div>
      <div>
        <ul className="navbar-links">
          <li className="logo">
            <Link to="/">
              <img src="/logo.png" alt="image" />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/galerie">Galerie</Link>
          </li>
          <li>
            <Link to="/suspensii">Suspensii</Link>
          </li>
          <li>
            <Link to="/proiectoare">Proiectoare si bare LED</Link>
          </li>
          <li>
            <Link to="/jante">Jante si Anvelope</Link>
          </li>
          <li>
            <Link to="/bare">Bare de protectie</Link>
          </li>
          <li>
            <Link to="/accesorii">Accesorii</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
