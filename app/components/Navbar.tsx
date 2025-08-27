import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
      <img src="/images/logo.png" alt="HireScope Logo" />
      </Link>
      <Link to="/upload" className="primary-button">
        Upload Resume
      </Link>
    </nav>
  )
}

export default Navbar
