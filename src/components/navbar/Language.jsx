import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "../buttons/IconButton";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { languages } from "./../../constants/languages";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

const Language = () => {
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
    <div className="relative" ref={ref}>
      <IconButton
        title="language"
        style={{ color: "var(--main-color)" }}
        onClick={toggleOpen}
      >
        <FontAwesomeIcon icon={faLanguage} />
      </IconButton>
      {isOpen && (
        <div className="language">
          {languages.map((e) => (
            <h4
              key={e.value}
              onClick={(ev) => toggleLanguage(e.value, ev)}
              className={i18n.language === e.value ? "active" : ""}
            >
              {e.title}
            </h4>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
