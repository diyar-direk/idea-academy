import { faClock, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dateFormatter from "../../utils/dateFormatter";
import videoServerSrc from "../../utils/videoServerSrv";

const PostInfo = ({ data }) => {
  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.content}</p>

      <article className="post-footer">
        <div className="time">
          <FontAwesomeIcon icon={faClock} />
          {dateFormatter(data?.createdAt, "fullDate")}
        </div>
        <a href={videoServerSrc(data?.video)} target="_blank">
          <FontAwesomeIcon icon={faLink} />
        </a>
      </article>
    </div>
  );
};

export default PostInfo;
