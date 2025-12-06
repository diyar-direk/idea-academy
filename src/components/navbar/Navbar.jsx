import { Link, NavLink } from "react-router";
import "./navbar.css";
import Logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <header className="home-header">
      <div className="container">
        <Link className="logo" to={"/"}>
          <img src={Logo} alt="logo" />
          <div>
            <h2>idea academy</h2>
            <h4>for computer science</h4>
          </div>
        </Link>

        <nav className="flex-1">
          <NavLink>home</NavLink>
          <NavLink>about us</NavLink>
          <NavLink>courses</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
