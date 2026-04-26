import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const BottomHeader = () => {
  return (
    <div className="bottom-header">
      <NavLink className="link">
        <h2>
          <FontAwesomeIcon icon={faUsers} /> users
        </h2>
        <article>
          <h3>Lorem ipsum dolor sit.</h3>
          <h3>Lorem ipsum dolor sit.</h3>
          <h3>Lorem ipsum dolor sit.</h3>
        </article>
      </NavLink>
    </div>
  );
};

export default BottomHeader;
