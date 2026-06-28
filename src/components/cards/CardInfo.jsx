import { faClock, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dateFormatter from "../../utils/dateFormatter";
import videoServerSrc from "../../utils/videoServerSrv";

const PostInfo = ({ data }) => {
  const text = new DOMParser()
    .parseFromString(data.content, "text/html")
    .body.textContent.trim();

  const handleClick = (e) => {
    e.preventDefault();
    window.open(videoServerSrc(data?.video), "_blank");
  };

  return (
    <div>
      <h2 className="two-line-ellipsis">{data?.title}</h2>
      <p className="one-line-ellipsis">{text}</p>

      <article className="post-footer">
        <div className="time">
          <FontAwesomeIcon icon={faClock} />
          {dateFormatter(data?.createdAt, "fullDate")}
        </div>
        {data?.video && (
          <span onClick={handleClick}>
            <FontAwesomeIcon icon={faLink} />
          </span>
        )}
      </article>
    </div>
  );
};

export default PostInfo;
