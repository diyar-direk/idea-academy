import { memo, useCallback, useEffect, useMemo, useState } from "react";
import "./inputs.css";
import Button from "../buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**
 * @typedef {Object} OptionItem
 * @property {string} text - النص الذي سيُعرض داخل القائمة المنسدلة
 * @property {any} [value] - القيمة المرتبطة بهذا الخيار (يمكن أن تكون أي نوع)
 * @property {function(): void} [onSelectOption] - دالة اختيار مخصصة تُنفذ عند الضغط على هذا الخيار
 * @property {Object} [props] - خصائص إضافية يمكن تمريرها لتخصيص كل خيار (className, style, إلخ)
 */

/**
 * @typedef {Object} SelectOptionInputProps
 * @property {string} label - عنوان الحقل
 * @property {boolean} notRequired - لعرض او اخفاء النجمة
 * @property {string} placeholder - النص المعروض عند عدم وجود قيمة محددة
 * @property {OptionItem[]} options - قائمة الخيارات القابلة للعرض والاختيار
 * @property {string} [value] - القيمة الحالية المحددة
 * @property {function(OptionItem): void} onSelectOption - دالة تُستدعى عند اختيار أحد الخيارات
 * @property {function(): void} [onIgnore] - دالة تُستدعى عند الضغط على زر الحذف
 * @property {string} [errorText] - نص الخطأ لعرضه أسفل الحقل
 * @property {React.ReactNode} [addOption] - عنصر إضافي يُعرض أعلى قائمة الخيارات (مثل زر "إضافة خيار")
 * @property {Object} [optionListProps] - خصائص إضافية يمكن تمريرها إلى قائمة الخيارات (مثل style أو className)
 * @property {Object} [wrapperProps] - خصائص إضافية يمكن تمريرها إلى الغلاف الرئيسي للمكون
 */

/**
 * مكون لاختيار القيم من قائمة منسدلة قابلة للتخصيص
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
  addOption,
  optionListProps = {},
  wrapperProps = {},
  notRequired,
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
    [onSelectOption]
  );

  useEffect(() => {
    const onBodyClick = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", onBodyClick);
    return () => window.removeEventListener("click", onBodyClick);
  }, [isOpen]);

  const optionListClassName = useMemo(
    () => `options active ${optionListProps?.className || ""}`,
    [optionListProps]
  );

  const wrapperClassName = useMemo(
    () => `select-input inp ${wrapperProps?.className || ""}`,
    [wrapperProps]
  );

  const labelClassName = useMemo(
    () => `${!notRequired ? "required" : ""} title`,
    [notRequired]
  );

  return (
    <div {...wrapperProps} className={wrapperClassName}>
      <label
        onFocus={() => setIsOpen(true)}
        onClick={toggleOptionArea}
        className={labelClassName}
      >
        {label}
      </label>

      <div onClick={toggleOptionArea} className="placeholder center relative">
        <span className="flex-1 ellipsis">{placeholder}</span>
        <FontAwesomeIcon icon={faChevronDown} />

        {isOpen && (
          <article {...optionListProps} className={optionListClassName}>
            {addOption}
            {options?.map((opt, index) => (
              <h3
                {...opt.props}
                key={opt.text || index}
                onClick={(e) => handleSelect(opt, e)}
              >
                {opt.text}
              </h3>
            ))}
          </article>
        )}
      </div>

      {value && (
        <Button onClick={onIgnore} btnStyleType="outlined" btnType="delete">
          {value}
        </Button>
      )}

      {errorText && <p className="field-error">{errorText}</p>}
    </div>
  );
};

export default memo(SelectOptionInput);
