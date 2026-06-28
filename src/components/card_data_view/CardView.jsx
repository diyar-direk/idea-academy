import React, { useState } from "react";
import imgServerSrc from "../../utils/imgServerSrc";
import dateFormatter from "../../utils/dateFormatter";
import videoServerSrc from "../../utils/videoServerSrv";
import "./style.css";
import "quill/dist/quill.snow.css";
import { faArrowsRotate, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgViewPopup from "../popup/ImgViewPopup";

const CardView = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!data) return;

  return (
    <>
      <h1 className="view-title"> {data?.title} </h1>
      <div className="card-view">
        <main className="main-view-section">
          {data?.image && (
            <img
              src={imgServerSrc(data?.image)}
              alt=""
              className="view-cover"
              onClick={() => setIsOpen(true)}
            />
          )}

          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          ></div>
        </main>

        <aside className="view-sidebar">
          <div className="view-info">
            <article>
              <p className="key">
                <FontAwesomeIcon icon={faClock} /> created at
              </p>
              <p className="value">
                {dateFormatter(data?.createdAt, "fullDate")}
              </p>
            </article>
            <article>
              <p className="key">
                <FontAwesomeIcon icon={faArrowsRotate} /> last update
              </p>
              <p className="value">
                {dateFormatter(data?.updatedAt, "fullDate")}
              </p>
            </article>
          </div>
          {data?.video && (
            <iframe
              src={videoServerSrc(data?.video)}
              frameBorder="0"
              width={"100%"}
              height={400}
            />
          )}
        </aside>
      </div>
      <ImgViewPopup
        src={isOpen && imgServerSrc(data?.image)}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default CardView;
