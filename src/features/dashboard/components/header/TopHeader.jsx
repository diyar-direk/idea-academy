import { Link } from "react-router";
import ToolTip from "../../../../components/tooltip/Tooltip";
import {
  faGraduationCap,
  faLanguage,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "./../../../../constants/icons";

const TopHeader = () => {
  return (
    <div className="top-header">
      <Link className="logo">
        <FontAwesomeIcon icon={faGraduationCap} /> idea academy
      </Link>
      <article>
        <ToolTip text="mode" placement="bottom">
          <FontAwesomeIcon icon={faMoon} />
        </ToolTip>
        <div className="language-container">
          <ToolTip text="language" placement="bottom">
            <FontAwesomeIcon icon={faLanguage} />
          </ToolTip>
        </div>
        <div className="search-container">
          <label htmlFor="pages-search">
            <input type="text" placeholder="search..." />
            <FontAwesomeIcon icon={icons.search} />
          </label>
        </div>
      </article>
    </div>
  );
};

export default TopHeader;
