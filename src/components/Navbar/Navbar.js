// Libraries
import { Link } from "react-router-dom";

// Style and assets
import "./Navbar.css";
import Temple from "../../assets/temple.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <Link to="/">
            <span>The Dojo</span>
          </Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
