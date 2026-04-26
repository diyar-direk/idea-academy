import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../buttons/Button";
import { useDebounce } from "use-debounce";
import { useInfiniteFetch } from "../../hooks/useInfiniteFetch";
import "./inputs.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skeleton from "./../skeleton/Skeleton";
import RepeatChildren from "./../RepeatChildren";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { icons } from "./../../constant/icons";
import { spritObject } from "../../utils/spritObject";
import DBkeys from "../../constant/DBkeys";

/**

 * @component
 *
 * @param {Object} props
 *
 * @param {string} [props.label]
 * 
 * @param {symbol} [props.labelIcon]
 *
 * @param {boolean} [props.notRequired=false]
 * 
 * 
 * @param {string} props.placeholder
 *
 * @param {(option: any) => string} props.optionLabel
 *
 * @param {(option: any) => void} props.onChange
 *
 * @param {(option?: any) => void} props.onIgnore
 *
 * @param {any | any[]} props.value
 *
 * @param {boolean} [props.isArray=false]
 * 
 * @param {boolean} [props.showButton=false]
 *
 * @param {string} props.endPoint
 *
 * @param {Object} [props.params={}]
 *
 * @param {string} [props.errorText]
 *
 * @param {number} [props.delay=500]
 *
 * @param {Array<{
 *   title: string,
 *   onChange: () => void
 * }>} [props.customOptions=[]]
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props.rest
 *
 * @returns {JSX.Element}
 */

const SelectInputApi = ({
  placeholder,
  label,
  optionLabel,
  onChange,
  onIgnore,
  value,
  endPoint,
  isArray,
  errorText,
  delay = 500,
  customOptions = [],
  notRequired,
  params = {},
  labelIcon,
  showButton,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, delay);
  const { t } = useTranslation();
  const { data, loadMoreRef, isFetching } = useInfiniteFetch({
    endPoint: endPoint,
    [DBkeys.limit]: 3,
    [DBkeys.search]: debouncedSearch,
    ...params,
  });

  const items = data?.pages?.flatMap((data) => data.data);

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const toggleOpen = useCallback(
    (e) => {
      stopPropagation(e);
      setIsOpen((prev) => !prev);
    },
    [stopPropagation],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onBodyClick = () => setIsOpen(false);
    window.addEventListener("click", onBodyClick);

    return () => {
      window.removeEventListener("click", onBodyClick);
    };
  }, [isOpen, isArray]);

  const labelClassName = useMemo(
    () => `${!notRequired ? "required" : ""} title font-color`,
    [notRequired],
  );

  const handleChange = useCallback((e) => onChange(e), [onChange]);
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value.toLowerCase());
  }, []);

  const optionClassName = useMemo(
    () => `${isOpen ? "active " : ""} options`,
    [isOpen],
  );

  const placeholderClassName = useMemo(
    () => `${errorText ? "input-error-style" : ""} placeholder center relative`,
    [errorText],
  );

  const placeholderValue = useMemo(() => {
    const frontText = !isArray
      ? optionLabel(value)
      : value.length > 0 && spritObject(value, optionLabel);

    const text = frontText || placeholder;

    return text || `${t("common.select")} ${label}`;
  }, [value, placeholder, label, t, isArray, optionLabel]);

  return (
    <div className="select-input inp">
      {label && (
        <label className={labelClassName} onClick={toggleOpen}>
          {labelIcon && <FontAwesomeIcon icon={labelIcon} />}
          {label}
        </label>
      )}

      <div className={placeholderClassName} onClick={toggleOpen}>
        <span className="flex-1 ellipsis"> {placeholderValue}</span>
        <FontAwesomeIcon icon={faChevronDown} />

        <div {...props} className={optionClassName}>
          <label
            htmlFor="search"
            onClick={stopPropagation}
            className="auto-complete-search"
          >
            <input
              value={search}
              onChange={handleSearch}
              placeholder={t("table.filters.search")}
              id="search"
            />
            <FontAwesomeIcon icon={icons.search} />
          </label>
          <article>
            {customOptions?.map((itm) => (
              <h3 key={itm.title} onClick={itm.onChange}>
                {itm.title}
              </h3>
            ))}

            {items?.map((itm, i) => (
              <h3
                key={itm[DBkeys.id]}
                onClick={() => handleChange(itm)}
                ref={i === items?.length - 1 ? loadMoreRef : null}
                className={`${isArray ? "array" : ""} ${
                  isArray && value?.some((v) => v[DBkeys.id] === itm[DBkeys.id])
                    ? "selected"
                    : ""
                }`}
              >
                {optionLabel(itm)}
              </h3>
            ))}
            {isFetching && (
              <RepeatChildren count={3}>
                <Skeleton height="20px" width="90%" />
              </RepeatChildren>
            )}
          </article>
        </div>
      </div>

      {showButton && value && !isArray && (
        <Button
          onClick={onIgnore}
          btnStyleType="transparent"
          type="button"
          className="selected-value"
        >
          {optionLabel(value)}
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
              key={v[DBkeys.id]}
            >
              {optionLabel(v)}
              <FontAwesomeIcon icon={icons.close} />
            </Button>
          ))}
        </div>
      )}

      {errorText && <p className="field-error">{errorText}</p>}
    </div>
  );
};

export default SelectInputApi;
