import { Link } from "react-router-dom";
import "../Styling/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/">
              <img className="logo_img" src="/logo.png" alt="image" />
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
            <Link to="/jante">Jante</Link>
          </li>
          <li>
            <Link to="/bare">Bare de protectie</Link>
          </li>
          <li>
            <Link to="/anvelope">Anvelope</Link>
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
