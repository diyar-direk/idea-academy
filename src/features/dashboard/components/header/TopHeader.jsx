import { Link } from "react-router";
import ToolTip from "../../../../components/tooltip/Tooltip";
import {
  faGraduationCap,
  faLanguage,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDarkMode from "../../../../hooks/useDarkMode";
import { languages } from "./../../../../constants/languages";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

const TopHeader = () => {
  const { changeMode } = useDarkMode();
  const { isOpen, ref, toggleOpen } = useClickOutside();
  const { i18n } = useTranslation();

  const toggleLanguage = useCallback(
    (lang, e) => {
      i18n.changeLanguage(lang);
      toggleOpen(e);
    },
    [i18n, toggleOpen],
  );

  return (
    <div className="top-header">
      <Link className="logo" to={"/"}>
        <FontAwesomeIcon icon={faGraduationCap} /> idea academy
      </Link>
      <article>
        <ToolTip text="mode" placement="bottom" onClick={changeMode}>
          <FontAwesomeIcon icon={faMoon} />
        </ToolTip>
        <div className="language-container relative" ref={ref}>
          <ToolTip text="language" placement="bottom" onClick={toggleOpen}>
            <FontAwesomeIcon icon={faLanguage} />
          </ToolTip>
          {isOpen && (
            <div className="language-options">
              {languages.map((e) => (
                <p
                  key={e.value}
                  onClick={(ev) => toggleLanguage(e.value, ev)}
                  className={i18n.language === e.value ? "active" : ""}
                >
                  {e.title}
                </p>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default TopHeader;
