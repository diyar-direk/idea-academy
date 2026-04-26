import { memo, useCallback, useEffect, useMemo, useState } from "react";
import "./inputs.css";
import Button from "../buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { icons } from "../../constants/icons";

/**
 * @typedef {Object} OptionItem
 * @property {string} text
 * @property {symbol} icon
 * @property {any} [value]
 * @property {function(): void} [onSelectOption]
 * @property {Object} [props]
 */
/**
 * @typedef {Object} customOptionsProps
 * @property {string} title
 * @property {() => void} [onChange]
 */

/**
 * @typedef {Object} SelectOptionInputProps
 * @property {string} label
 * @property {symbol} labelIcon
 * @property {symbol} icon
 * @property {boolean} notRequired
 * @property {string} placeholder
 * @property {OptionItem[]} options
 * @property {string} [value]
 * @property {customOptionsProps[]} customOptions
 * @property {function(OptionItem): void} onSelectOption
 * @property {function(): void} [onIgnore]
 * @property {string} [errorText]
 * @property {Object} [optionListProps]
 * @property {Object} [wrapperProps]
 * @property {boolean} [showButton]
 * @property {boolean} [isArray]
 */

/**
 * @param {SelectOptionInputProps} props
 */

const SelectOptionInput = ({
  label,
  placeholder,
  onIgnore,
  value,
  options = [],
  onSelectOption,
  errorText,
  customOptions = [],
  optionListProps = {},
  wrapperProps = {},
  notRequired,
  labelIcon,
  icon,
  showButton,
  isArray,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptionArea = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelect = useCallback(
    (option, e) => {
      e?.stopPropagation();
      option.onSelectOption ? option.onSelectOption() : onSelectOption(option);
      setIsOpen(false);
    },
    [onSelectOption],
  );

  useEffect(() => {
    const onBodyClick = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("click", onBodyClick);
    return () => window.removeEventListener("click", onBodyClick);
  }, [isOpen]);

  const optionListClassName = useMemo(
    () => `options active ${optionListProps?.className || ""}`,
    [optionListProps],
  );

  const wrapperClassName = useMemo(
    () => `select-input inp ${wrapperProps?.className || ""}`,
    [wrapperProps],
  );
  const labelClassName = useMemo(
    () => `${!notRequired ? "required" : ""} title`,
    [notRequired],
  );

  const placeholderClassName = useMemo(
    () => `${errorText ? "input-error-style" : ""} placeholder center relative`,
    [errorText],
  );
  const { t } = useTranslation();

  const placeholderValue = useMemo(() => {
    const frontText = !isArray ? value : value.length > 0 && value.join();
    const text = frontText || placeholder;
    return text || `${t("common.select")} ${label}`;
  }, [value, placeholder, label, t, isArray]);

  return (
    <div {...wrapperProps} className={wrapperClassName}>
      {label && (
        <label
          onFocus={() => setIsOpen(true)}
          onClick={toggleOptionArea}
          className={labelClassName}
        >
          {labelIcon && <FontAwesomeIcon icon={labelIcon} />}
          {label}
        </label>
      )}

      <div onClick={toggleOptionArea} className={placeholderClassName}>
        {icon && <FontAwesomeIcon icon={icon} />}
        <span className="flex-1 ellipsis">{placeholderValue}</span>

        <FontAwesomeIcon icon={faChevronDown} />

        {isOpen && (
          <article {...optionListProps} className={optionListClassName}>
            {customOptions?.map((itm) => (
              <h3 key={itm.title} onClick={itm.onChange}>
                {itm.icon && <FontAwesomeIcon icon={itm.icon} />}
                {itm.title}
              </h3>
            ))}

            {options?.map((o, i) => (
              <h3
                key={o.text || i}
                onClick={(e) => handleSelect(o, e)}
                {...o.props}
                className={`${isArray ? `array ${value.some((e) => e === o.value) ? "selected" : ""}` : ""}`}
              >
                {o.icon && <FontAwesomeIcon icon={o.icon} />}
                {o.text}
              </h3>
            ))}
          </article>
        )}
      </div>

      {showButton && value && !isArray && (
        <Button
          onClick={onIgnore}
          btnStyleType="transparent"
          type="button"
          className="selected-value"
        >
          {value}
          <FontAwesomeIcon icon={icons.close} />
        </Button>
      )}

      {isArray && showButton && (
        <div className="selected-values">
          {value.map((v) => (
            <Button
              onClick={() => onIgnore(v)}
              className="selected-value"
              btnStyleType="transparent"
              type="button"
              key={v}
            >
              {v}
              <FontAwesomeIcon icon={icons.close} />
            </Button>
          ))}
        </div>
      )}

      {errorText && <p className="field-error">{errorText}</p>}
    </div>
  );
};

export default memo(SelectOptionInput);
