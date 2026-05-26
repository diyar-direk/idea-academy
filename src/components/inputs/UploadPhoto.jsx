import { memo, useCallback, useEffect, useMemo, useState } from "react";
import "./upload-image.css";
import Button from "../buttons/Button";
import PopUp from "../popup/PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { icons } from "./../../constants/icons";

function UploadPhoto({
  onChange = () => {},
  title = "",
  name = "",
  errorText,
  value,
  accept = "image/*,video/*",
  defaultImage,
  notRequired,
  className,
  revoke = true,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const isVideo = useMemo(() => {
    if (value?.file?.type) {
      return value.file.type.startsWith("video/");
    }

    if (value?.url) {
      return /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(value.url);
    }

    return false;
  }, [value]);

  const handleChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");

      if (!isImage && !isVideo) return;

      const url = URL.createObjectURL(file);

      onChange({
        name: e.target.name,
        file,
        url,
      });
    },
    [onChange],
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();

      const file = e.dataTransfer.files[0];
      if (!file) return;

      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");

      if (!isImage && !isVideo) return;

      const url = URL.createObjectURL(file);

      onChange({
        name,
        file,
        url,
      });

      setIsDragging(false);
    },
    [onChange, name],
  );

  const handleRemove = useCallback(() => {
    onChange("");
    setOpen(false);
  }, [onChange]);

  useEffect(() => {
    if (!value?.file) setIsDragging(false);

    return () => {
      if (value?.file && value?.url && revoke) {
        URL.revokeObjectURL(value.url);
      }
    };
  }, [value, revoke]);

  const handleDragEnter = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleClick = useCallback(() => {
    if (value?.url) {
      setOpen(true);
    }
  }, [value?.url]);

  const labelClassName = useMemo(
    () => `${!notRequired ? "required" : ""} upload-title`,
    [notRequired],
  );

  const uploadClassName = useMemo(
    () =>
      `upload-frame ${isDragging ? "dragging" : ""} ${
        errorText ? "error" : ""
      }`,
    [isDragging, errorText],
  );

  return (
    <div className={`${className || ""} upload-file font-color`}>
      <label
        className={labelClassName}
        htmlFor={name + (value?.url ? "disabled" : "")}
      >
        {title}
      </label>

      <div className="upload-container">
        <div className={uploadClassName}>
          {value?.url && (
            <Button
              onClick={handleRemove}
              className="remove-btn"
              btnType="delete"
              type="button"
            >
              <FontAwesomeIcon icon={icons.close} />
            </Button>
          )}

          <label
            htmlFor={name + (value?.url ? "disabled" : "")}
            className="upload-label"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            {value?.url || defaultImage ? (
              isVideo ? (
                <video
                  className="img-main"
                  src={value?.url || defaultImage}
                  controls
                />
              ) : (
                <>
                  <img
                    className="img-bg"
                    src={value?.url || defaultImage}
                    alt="preview"
                  />
                  <img
                    className="img-main"
                    src={value?.url || defaultImage}
                    alt="preview"
                  />
                </>
              )
            ) : (
              <div
                className={`upload-placeholder ${isDragging ? "dragging" : ""}`}
              >
                {isDragging ? (
                  <h1>{t("media_types.drop")}</h1>
                ) : (
                  <>
                    <h1>
                      {t("media_types.upload")} {title}
                    </h1>
                    <h2>{t("media_types.drag")}</h2>
                  </>
                )}
              </div>
            )}
          </label>
        </div>

        <div className="upload-actions">
          <label htmlFor={name}>
            <FontAwesomeIcon icon={faCameraRetro} />
          </label>

          <input
            onChange={handleChange}
            id={name}
            name={name}
            type="file"
            hidden
            accept={accept}
          />

          {errorText && <span className="field-error">{errorText}</span>}
        </div>
      </div>

      <PopUp
        isOpen={open}
        onClose={() => setOpen(false)}
        className="upload-popup"
      >
        <div className="popup-body">
          {isVideo ? (
            <video src={value?.url || ""} className="popup-img" controls />
          ) : (
            <img
              src={value?.url || ""}
              alt="preview"
              className="popup-img"
              onClick={() => window.open(value?.url, "_blank")}
            />
          )}

          <Button
            btnStyleType="outlined"
            onClick={() => setOpen(false)}
            btnType="delete"
            type="button"
          >
            {t("close")}
          </Button>
        </div>
      </PopUp>
    </div>
  );
}

export default memo(UploadPhoto);
