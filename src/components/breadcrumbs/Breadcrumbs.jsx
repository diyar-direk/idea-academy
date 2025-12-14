import { Link, useLocation } from "react-router";
import { pagesRouters } from "./../../constants/pagesRouters";
import "./breadcrumbs.css";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathes = pathname.split("/").filter((path) => path);

  return (
    <div className="breadcrumbs container">
      <Link to={pagesRouters.home}>home</Link>

      {pathes?.map((path, i) => {
        const to = `/${path}`;
        const isLast = i === pathes.length - 1;

        return (
          <span key={to}>
            {isLast ? (
              <span className="current">{path}</span>
            ) : (
              <Link to={to}>{path}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
