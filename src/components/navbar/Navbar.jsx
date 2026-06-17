import { Link, NavLink } from "react-router";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import IconButton from "./../buttons/IconButton";
import Button from "./../buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faMoon } from "@fortawesome/free-solid-svg-icons";
import { pagesRouters } from "../../constants/pagesRouters";
import { pagesLinks } from "../../constants/pagesLink";
import useDarkMode from "./../../hooks/useDarkMode";
import { useAuth } from "../../context/AuthContext";
import { useClickOutside } from "./../../hooks/useClickOutside";
import Language from "./Language";

const Navbar = () => {
  const { changeMode } = useDarkMode();
  const { user } = useAuth();
  const { isOpen, toggleOpen, ref, setIsOpen } = useClickOutside();

  return (
    <header className="home-header gap-10 container">
      <Link className="logo" to={pagesRouters.home}>
        <img src={Logo} alt="logo" />
        <div>
          <h2>idea academy</h2>
          <h4>for computer science</h4>
        </div>
      </Link>

      <div className="flex gap-10 flex-1 items-container" ref={ref}>
        <nav className={`flex-1 ${isOpen ? " active" : ""}`}>
          {pagesLinks?.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
          {user ? (
            <NavLink to={pagesRouters.dashboard.statistics}>dashboard</NavLink>
          ) : (
            <NavLink to={pagesRouters.login}>login</NavLink>
          )}
        </nav>

        <Language />

        <IconButton title="mood" onClick={changeMode}>
          <FontAwesomeIcon icon={faMoon} />
        </IconButton>

        <IconButton title="menu" className="mobile-menu" onClick={toggleOpen}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </IconButton>

        <Link to={pagesRouters.contact} className="contact-btn">
          <Button btnStyleType="contained">contact us</Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
