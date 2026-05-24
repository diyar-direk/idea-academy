import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router";
import { dashboardLinks } from "../../../../constants/pagesLink";

const BottomHeader = () => {
  const nav = useNavigate();

  return (
    <div className="bottom-header">
      {dashboardLinks?.map((link) => (
        <div className="link" key={link.to} onClick={() => nav(link.to)}>
          <h2>
            <FontAwesomeIcon icon={link.icon} />
            {link.title}
          </h2>
          <article>
            {link.children?.map((child) => (
              <NavLink
                to={child.to}
                key={child.to}
                onClick={(e) => e.stopPropagation()}
              >
                <FontAwesomeIcon icon={child.icon} /> {child.title}
              </NavLink>
            ))}
          </article>
        </div>
      ))}
    </div>
  );
};

export default BottomHeader;
